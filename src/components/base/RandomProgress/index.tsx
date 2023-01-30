import React from "react";
import {useEffect} from "react";
import {useAppDispatch , useSelector} from "../../../redux/hooks";
import LinearProgress from "@mui/material/LinearProgress";
import {progressSlice} from "../../../redux/progress/slice";

interface myProps{
  color:any
}

const RandomProgress:React.FC<myProps> = (props) => {
  const {color} = props;
  const dispatch = useAppDispatch ();
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
