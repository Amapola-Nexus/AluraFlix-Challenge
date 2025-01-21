import { useEffect, useState } from "react";

const useFavTransition = (isFav) => {
    const [hasTransitioned, setHasTransitioned] = useState(false);

    useEffect(() => {
        if (isFav && !hasTransitioned) {
            setHasTransitioned(true);
        } else if (!isFav && hasTransitioned) {
            setHasTransitioned(false);
        }
    }, [isFav, hasTransitioned])
    
    return hasTransitioned;
}

export default useFavTransition