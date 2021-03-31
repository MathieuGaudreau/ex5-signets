import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function OrdreDossier({ triDossier }) {
  // état du tri des dossiers
  const [ordre, setOrdre] = triDossier;

  return (
    <div className="OrdreDossier">
      <InputLabel id="demo-simple-select-label">Ordre des dossiers</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ordre}
        defaultValue={0}
        onChange={(e) => setOrdre(e.target.value)}
      >
        <MenuItem value={0}>
          Date de modification descendante
        </MenuItem>
        <MenuItem value={1}>Nom de dossier ascendant</MenuItem>
        <MenuItem value={2}>Nom de dossier descendant</MenuItem>
      </Select>
    </div>
  );
}