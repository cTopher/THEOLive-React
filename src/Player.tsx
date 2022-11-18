import {Player} from "@theolive/player"
import {useCallback, useEffect, useState} from "react";
import "@theolive/player/THEOLive.css"

interface THEOLiveProps {
    onPlayer: (player: Player) => void
}

function THEOLive({onPlayer}: THEOLiveProps) {
    const [player, setPlayer] = useState<Player | null>(null);
    const onMount = useCallback((node: HTMLElement | null) => {
        if (node) {
            setPlayer(new Player(node));
        }
    }, []);

    useEffect(() => {
        if (player && onPlayer) {
            onPlayer(player)
        }
    }, [player, onPlayer])

    return <div ref={onMount}/>
}

export default THEOLive