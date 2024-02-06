export const ScoreboardRow = ({ playerData }: {
    playerData:
    {
        name: string
        averageScore: number,
        wins: number,
        averageFinishPosition: number
        gamesPlayed: number,
        bestScore: number,
        worstScore: number
    }
}) => {
    return (
        <div className='grid grid-cols-7 p-2 gap-2'>
            <p>{playerData.name}</p>
            <p>{playerData.averageScore.toFixed(2)}</p>
            <p>3</p>
            <p>3.54</p>
            <p>10</p>
            <p>78</p>
            <p>132</p>
        </div>
    )
}