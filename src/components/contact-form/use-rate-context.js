import {useEffect, useContext} from 'react';
import {RateContext} from "../../contexts/rate";

export function useRateContext() {
  const context = useContext(RateContext);

  useEffect(() => {
    return () => {
      context.rate.reset();
    }
  }, []);

  return context.rate;
}