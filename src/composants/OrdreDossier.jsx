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
      defaultValue={0}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ordre}
        onChange={(i) => setOrdre(i.target.value)}
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