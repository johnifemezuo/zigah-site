import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

//NOte:
// make sure you have swipeable installed

export const useCarousel = ({children}: {children: React.ReactNode}) => {

     const [activeIndex, setActiveIndex] = useState(0);
     const [paused, setPaused] = useState(false);

     const updateIndex = (newIndex: number) => {
       if (newIndex < 0) {
         newIndex = React.Children.count(children) - 1;
       } else if (newIndex >= React.Children.count(children)) {
         newIndex = 0;
       }

       setActiveIndex(newIndex);
     };

     useEffect(() => {
       const interval = setInterval(() => {
         if (!paused) {
           updateIndex(activeIndex + 1);
         }
       }, 5000);

       return () => {
         if (interval) {
           clearInterval(interval);
         }
       };
     });

     const handlers = useSwipeable({
       onSwipedLeft: () => updateIndex(activeIndex + 1),
       onSwipedRight: () => updateIndex(activeIndex - 1),
     });

    return {
        activeIndex,
        setPaused,
        updateIndex,
        handlers
    }
}