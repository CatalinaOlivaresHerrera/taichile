"use client";
import { useState } from "react";

type Bomba = {
  cs: string;
  gasto: string;
  ph: string;
  h2o2gl: string;
  h2o2res: string;
};

type Registro = {
  fecha: string;
  hora: string;
  articulo: string;
  turno: string;
  peroxido: string;
  b1: Bomba;
  b2: Bomba;
};

const emptyBomba = (): Bomba => ({ cs: "", gasto: "", ph: "", h2o2gl: "", h2o2res: "" });

const emptyForm = (): Registro => ({
  fecha: new Date().toISOString().split("T")[0],
  hora: new Date().toTimeString().slice(0, 5),
  articulo: "",
  turno: "",
  peroxido: "",
  b1: emptyBomba(),
  b2: emptyBomba(),
});

export default function ResidualPeroxido() {
  const [tab, setTab] = useState<"ingreso" | "dashboard">("ingreso");
  const [form, setForm] = useState<Registro>(emptyForm());
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [saved, setSaved] = useState(false);

  const setField = (field: keyof Registro, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const setBomba = (bomba: "b1" | "b2", field: keyof Bomba, value: string) =>
    setForm((prev) => ({ ...prev, [bomba]: { ...prev[bomba], [field]: value } }));

  const guardar = () => {
    if (!form.fecha) return alert("Por favor ingresa la fecha.");
    setRegistros((prev) => [form, ...prev]);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    setForm(emptyForm());
  };

  const avg = (key: "b1" | "b2", field: keyof Bomba) => {
    if (!registros.length) return "—";
    const vals = registros.map((r) => parseFloat(r[key][field])).filter((n) => !isNaN(n));
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2) : "—";
  };

  const avgPeroxido = () => {
    if (!registros.length) return "—";
    const vals = registros.map((r) => parseFloat(r.peroxido)).filter((n) => !isNaN(n));
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2) : "—";
  };

  const exportExcel = () => {
  if (!registros.length) return alert("No hay registros para exportar.");

  const headers = ["Fecha","Hora","Artículo","B1062 Cs%","B1062 Gasto ml","B1062 pH","B1062 H2O2 g/L","B1062 H2O2 Res","B1068 Cs%","B1068 Gasto ml","B1068 pH","B1068 H2O2 g/L","B1068 %H2O2 Res","Peróxido Kg/Ton","Turno"];
  const rows = registros.map((r) => [r.fecha,r.hora,r.articulo,r.b1.cs,r.b1.gasto,r.b1.ph,r.b1.h2o2gl,r.b1.h2o2res,r.b2.cs,r.b2.gasto,r.b2.ph,r.b2.h2o2gl,r.b2.h2o2res,r.peroxido,r.turno]);

  const xmlRows = [headers, ...rows]
    .map((row) => `<Row>${row.map((cell) => `<Cell><Data ss:Type="${isNaN(Number(cell)) || cell === "" ? "String" : "Number"}">${cell ?? ""}</Data></Cell>`).join("")}</Row>`)
    .join("");

  const xml = `<?xml version="1.0"?>
    <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
    xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
    <Worksheet ss:Name="Residual Peróxido">
        <Table>
        ${xmlRows}
        </Table>
    </Worksheet>
    </Workbook>`;

    const blob = new Blob([xml], { type: "application/vnd.ms-excel;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "residual_peroxido.xls";
    a.click();
    };

  const inputClass = "w-full h-9 px-3 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClass = "text-xs text-gray-500 mb-1 block";

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <div>
          <h1 className="text-lg font-medium text-gray-900">Residual Peróxido</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {new Date().toLocaleDateString("es-CL", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <span className="text-sm text-gray-500">{registros.length} registro{registros.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["ingreso", "dashboard"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-lg text-sm border transition-colors ${
              tab === t
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {t === "ingreso" ? "Ingreso de datos" : "Dashboard"}
          </button>
        ))}
      </div>

      {tab === "ingreso" && (
        <div className="space-y-4">
          {/* Info general */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
              Información general
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
              <div><label className={labelClass}>Fecha</label><input type="date" className={inputClass} value={form.fecha} onChange={(e) => setField("fecha", e.target.value)} /></div>
              <div><label className={labelClass}>Hora (hh:mm)</label><input type="time" className={inputClass} value={form.hora} onChange={(e) => setField("hora", e.target.value)} /></div>
              <div><label className={labelClass}>Artículo</label><input type="text" className={inputClass} placeholder="Nombre del artículo" value={form.articulo} onChange={(e) => setField("articulo", e.target.value)} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>Turno</label>
                <select className={inputClass} value={form.turno} onChange={(e) => setField("turno", e.target.value)}>
                  <option value="">Seleccionar...</option>
                  <option value="1">Turno 1</option>
                  <option value="2">Turno 2</option>
                  <option value="3">Turno 3</option>
                </select>
              </div>
              <div><label className={labelClass}>Peróxido (Kg/Ton)</label><input type="number" className={inputClass} placeholder="0.00" step="0.01" value={form.peroxido} onChange={(e) => setField("peroxido", e.target.value)} /></div>
            </div>
          </div>

          {/* Bombas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(["b1", "b2"] as const).map((b, i) => (
              <div key={b} className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
                  Bomba {i === 0 ? "1062" : "1068"}
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Cs. %", field: "cs" as keyof Bomba },
                    { label: "Gasto ml. Tiosulfato", field: "gasto" as keyof Bomba },
                    { label: "pH", field: "ph" as keyof Bomba },
                    { label: "H₂O₂ gr/L", field: "h2o2gl" as keyof Bomba },
                    { label: i === 0 ? "H₂O₂ Residual" : "%H₂O₂ Residual", field: "h2o2res" as keyof Bomba },
                  ].map(({ label, field }) => (
                    <div key={field}>
                      <label className={labelClass}>{label}</label>
                      <input type="number" className={inputClass} placeholder="0.00" step="0.01" value={form[b][field]} onChange={(e) => setBomba(b, field, e.target.value)} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            {saved && <span className="text-sm text-green-600">✓ Registro guardado correctamente</span>}
            <button onClick={() => setForm(emptyForm())} className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">
              Limpiar
            </button>
            <button onClick={guardar} className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Guardar registro
            </button>
          </div>
        </div>
      )}

      {tab === "dashboard" && (
        <div className="space-y-4">
          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Total registros", value: registros.length.toString(), unit: "" },
              { label: "pH prom. B1062", value: avg("b1", "ph"), unit: "" },
              { label: "pH prom. B1068", value: avg("b2", "ph"), unit: "" },
              { label: "Peróxido prom.", value: avgPeroxido(), unit: " Kg/T" },
            ].map(({ label, value, unit }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-2xl font-medium text-gray-900">{value}<span className="text-xs text-gray-400">{unit}</span></p>
              </div>
            ))}
          </div>

          {/* Tabla */}
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-700">Registros ingresados</span>
              <button onClick={exportExcel} className="px-3 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">
                ↓ Exportar Excel
              </button>
            </div>
            <div className="overflow-x-auto">
              {registros.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-10">{`Sin registros aún. Ingresa datos en la pestaña "Ingreso de datos".`}</p>
              ) : (
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="bg-gray-50 text-gray-500 font-medium px-3 py-2 text-left border-b border-gray-100">Fecha</th>
                      <th rowSpan={2} className="bg-gray-50 text-gray-500 font-medium px-3 py-2 text-left border-b border-gray-100">Hora</th>
                      <th rowSpan={2} className="bg-gray-50 text-gray-500 font-medium px-3 py-2 text-left border-b border-gray-100">Artículo</th>
                      <th colSpan={5} className="bg-blue-600 text-white font-medium px-3 py-2 text-center border-b border-blue-700">Bomba 1062</th>
                      <th colSpan={5} className="bg-blue-600 text-white font-medium px-3 py-2 text-center border-b border-blue-700">Bomba 1068</th>
                      <th rowSpan={2} className="bg-red-700 text-white font-medium px-3 py-2 text-center border-b border-red-800">Peróx.</th>
                      <th rowSpan={2} className="bg-gray-50 text-gray-500 font-medium px-3 py-2 text-center border-b border-gray-100">Turno</th>
                    </tr>
                    <tr>
                      {["Cs.%","Gasto ml","pH","H₂O₂ g/L","H₂O₂ Res.","Cs.%","Gasto ml","pH","H₂O₂ g/L","%H₂O₂ Res."].map((h, i) => (
                        <th key={i} className="bg-blue-50 text-blue-700 font-medium px-2 py-1.5 text-center border-b border-gray-100">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {registros.map((r, i) => (
                      <tr key={i} className="hover:bg-gray-50 border-b border-gray-100 last:border-0">
                        <td className="px-3 py-2 text-gray-700">{r.fecha.split("-").reverse().join("/")}</td>
                        <td className="px-3 py-2 text-gray-700">{r.hora || "—"}</td>
                        <td className="px-3 py-2 text-gray-700">{r.articulo || "—"}</td>
                        {[r.b1.cs,r.b1.gasto,r.b1.ph,r.b1.h2o2gl,r.b1.h2o2res,r.b2.cs,r.b2.gasto,r.b2.ph,r.b2.h2o2gl,r.b2.h2o2res].map((v, j) => (
                          <td key={j} className="px-2 py-2 text-center text-gray-700">{v || "—"}</td>
                        ))}
                        <td className="px-2 py-2 text-center text-gray-700">{r.peroxido || "—"}</td>
                        <td className="px-2 py-2 text-center">
                          {r.turno ? (
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.turno==="1"?"bg-blue-50 text-blue-700":r.turno==="2"?"bg-green-50 text-green-700":"bg-amber-50 text-amber-700"}`}>
                              T{r.turno}
                            </span>
                          ) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}