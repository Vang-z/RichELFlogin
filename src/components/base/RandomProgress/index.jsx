import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import {progressSlice} from "../../../redux/progress/slice";

const RandomProgress = (props) => {
  const {color} = props;
  const dispatch = useDispatch();
  const progress = useSelector(s => s.progress);

  useEffect(() => {
    const timer = setInterval(() => {
      const value = progress.value;
      if (value === 100) clearInterval(timer);
      const diff = Math.random() * 50;
      dispatch(progressSlice.actions.setValue(Math.min(value + diff, 100)));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return <LinearProgress color={color} variant="determinate" value={progress.value}/>;
}

export default RandomProgress;
