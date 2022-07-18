import React, { useState } from 'react'

export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 0));  // Se establece el counter como el valor máximo entre el valor previo + el valor pasado por parámetro y 0
    }

  return (
    { counter, increaseBy }
  )
}
