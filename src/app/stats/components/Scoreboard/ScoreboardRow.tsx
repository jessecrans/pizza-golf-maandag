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
        <div className='grid grid-cols-7 p-2 gap-4 text-center bg-slate-900 bg-opacity-50 rounded text-lg'>
            <p className="text-left font-bold">{playerData.name}</p>
            <p>{playerData.averageScore.toFixed(2)}</p>
            <p>{playerData.averageFinishPosition.toFixed(2)}</p>
            <p>{playerData.bestScore}</p>
            <p>{playerData.worstScore}</p>
            <p>{playerData.wins}</p>
            <p>{playerData.gamesPlayed}</p>
        </div>
    )
}