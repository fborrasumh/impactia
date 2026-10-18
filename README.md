# ImpactIA

El puesto de trabajo del técnico de aceleración de un parque científico. Aplicación web de un solo fichero, *local-first*, instalable (PWA).

**Usar la app:** https://fborrasumh.github.io/impactia/

**Idiomas:** español (por defecto), inglés y portugués; selector en la barra superior (o `?lang=en` / `?lang=pt`).

> La IA analiza, propone y acelera. El código comprueba citas, cifras y requisitos. El técnico decide.

## Qué hace

La unidad de trabajo es siempre la empresa. Cada expediente recorre: información → diagnóstico → decisión → oportunidad → financiación → socios → inversión → acción → impacto.

- **Cartera y panel:** empresas por estado, convocatorias que cierran, solicitudes abiertas, tareas vencidas, uso y coste estimado de la IA.
- **Expediente:** ficha de la empresa y documentos (PDF, Word, Excel, PowerPoint, CSV, TXT, imágenes) leídos en el navegador. El técnico marca qué documentos puede leer la IA.
- **Diagnóstico 360º en 14 dimensiones:** la IA propone puntuación, confianza, situación, evidencias, fortalezas, debilidades, oportunidades, riesgos, información que falta y recomendaciones. El código busca cada cita en los documentos. Una dimensión sin ninguna evidencia verificada queda **NO EVALUABLE** aunque la IA haya puesto un número. Todo es editable y queda registrado.
- **Estrategia:** misión, visión, horizonte, ejes, DAFO rellenado desde el diagnóstico sin IA, objetivos SMART comprobados por código (S, M, R, T; la A la confirma el técnico) y su cadena objetivo → acciones → tareas → indicador → impacto.
- **Finanzas:** márgenes, EBITDA, punto de equilibrio, endeudamiento, liquidez, consumo de caja, meses de caja, escenarios y necesidad de financiación, calculados por el código. La IA puede extraer cifras de unas cuentas (solo se aplican las que tienen la cifra dentro de una cita real) e interpretar las métricas (sin ver los documentos).
- **Financiación:** biblioteca de convocatorias del parque con enlace oficial y fecha de verificación; la IA puede leer unas bases y proponer cada requisito con su cita. El **encaje** (Funding Fit Score) lo calcula el código criterio a criterio: tamaño UE (Recomendación 2003/361/CE), localización, antigüedad, sector, TRL, temática, presupuesto, plazo, capacidad financiera y requisitos específicos. Nunca dice «elegible»: como mucho, «sin incompatibilidades detectadas».
- **Solicitudes:** convocatoria, presupuesto por partidas, calendario, memoria, indicadores, impacto y checklist. El código comprueba sumas, intensidad de ayuda, duración, plazos, consorcio y documentación; la IA revisa contradicciones, objetivos débiles y afirmaciones sin evidencia, con cita verificada.
- **Socios y consorcios:** capacidades necesarias, cuáles cubre ya el consorcio y qué entidades del directorio las declaran, con las palabras que coinciden. El interés de un socio nunca se da por hecho.
- **Inversión:** revisión del pitch deck en 12 elementos e **Investor Readiness Score**, que solo cuenta los elementos con cita verificada en el deck; inversores compatibles del directorio por sector, etapa, ticket y territorio.
- **Acción:** tareas con responsable, fecha, estado y origen; historial del expediente (fecha, acción, módulo, modelo de IA, documentos, usuario, resultado).
- **Informes** en Word, HTML y PDF (impresión), con datos y documentos utilizados, modelos de IA, leyenda 🟢 evidencia · 🔵 fuente · 🟠 inferencia · 🔴 pendiente, lista de inferencias y lo pendiente de verificar.
- **Memoria del parque:** indicadores agregados del año (empresas, empleo, diagnósticos, solicitudes, financiación concedida, tareas) en Word y CSV.
- **Cualquier parque:** perfil configurable; el PCUMH es el perfil por defecto.
- **Ejemplo ficticio** que funciona sin clave, guardado aparte de los datos del técnico.

## Cómo se usa la IA

Con la propia clave de OpenAI, Google Gemini o Anthropic Claude. Los módulos no llaman a un proveedor: piden una tarea con un perfil (FAST, CHEAP, REASONING, LONG_CONTEXT, DOCUMENT) a un enrutador común. El perfil fija el tamaño del contexto y de la respuesta; el modelo es el que elija el técnico.

## Privacidad

- Todo se guarda en el navegador (IndexedDB): expedientes, documentos originales, diagnósticos, tareas, informes e historial. No hay servidor, analítica ni seguimiento.
- La clave de IA vive solo en la pestaña (sessionStorage) y se borra al cerrarla, salvo que el técnico marque «Recordar mi clave en este navegador». Nunca entra en las copias.
- Antes de cada envío se muestra: tarea, categorías de información, documentos, proveedor, modelo, tamaño, coste estimado y una muestra. Se envía solo el contexto de la tarea; correos, DNI/NIE y teléfonos se enmascaran; el CIF y los contactos no se envían nunca.

## Copias y portabilidad

«La aplicación es reemplazable; los datos no.» Exporta un expediente o todo a un ZIP con `manifest.json` (versión, esquema, fecha, recuentos y huellas SHA-256), JSON abiertos (`companies`, `documents`, `diagnosis`, `strategy`, `finance`, `funding`, `applications`, `partners`, `investors`, `tasks`, `history`, `reports`) y los documentos originales. Al importar se verifican las huellas, se muestra un resumen (nuevos, conflictos, renumerados) y se elige fusionar (gana la versión más reciente de cada elemento), reemplazar o cancelar.

## Sin conexión

Publicada con `manifest.json`, `sw.js` e iconos junto a `index.html`, se instala como aplicación y funciona sin Internet para todo lo local. La IA necesita conexión. Las librerías de lectura de Word, PDF y ZIP se descargan la primera vez que se usan con conexión; después quedan en caché.

## Límites

- Es una herramienta de apoyo: la IA puede equivocarse y lo que no puede comprobar el código se marca como 🟠 o 🔴, no se oculta.
- El tamaño UE es provisional: no considera empresas asociadas ni vinculadas.
- El encaje con convocatorias depende de que los requisitos de la biblioteca estén bien cargados y verificados; no busca convocatorias en Internet.
- El encaje con socios e inversores se basa en palabras en común, no en significado.
- No hace OCR: PDF escaneados e imágenes se guardan pero la IA no los lee.
- Un solo técnico por navegador; para varios técnicos, fusionar copias ZIP.

## Autoría

Fernando Borrás Rocher (Universidad Miguel Hernández de Elche).
A partir de la especificación IMPACTIA del Parque Científico de la Universidad Miguel Hernández (PCUMH).

ORCID: Fernando Borrás Rocher [0000-0002-5519-4573](https://orcid.org/0000-0002-5519-4573)

## Cómo citar

Borrás Rocher, F. (2026). *ImpactIA* (v1.0.0) [Software]. (DOI en trámite)

## Licencia

MIT. Véase [LICENSE](LICENSE).
