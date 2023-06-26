import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default useStyle;