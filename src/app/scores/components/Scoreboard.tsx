import React from 'react'

const Scoreboard = ({
  currentGameData
}: {
  currentGameData: {
    date: string,
    players: string[],
    scores: number[][]
  }
}) => {
  const holePars = [
    3, 3, 4, 4, 7, 7, 4, 3, 4, 4, 4, 5, 4, 5, 4, 4, 5, 5
  ]

  return (
    <></>
    // <table className='w-full max-w-5xl table-auto'>
    //   <thead className='text-right'>
    //     <tr className='[&>th]:p-4 bg-green-950 bg-opacity-50'>
    //       <th>Holes</th>
    //       {
    //         currentGameData.scores[0].map((_, index) => (
    //           <th key={index} className='w-10'>{index + 1}</th>
    //         ))
    //       }
    //       <th>Total</th>
    //     </tr>
    //     <tr>
    //       <th>Par</th>
    //       {
    //         holePars.map((par, index) => (
    //           <th key={index}>{par}</th>
    //         ))
    //       }
    //     </tr>
    //   </thead>
    //   <tbody className='text-right'>
    //     {
    //       currentGameData.players.map((player, index) => (
    //         <tr key={player}>
    //           <td className='text-left'>{player}</td>
    //           {
    //             currentGameData.scores[index].map((score, index) => (
    //               <td key={index}>{score}</td>
    //             ))
    //           }
    //           <td>{currentGameData.scores[index].reduce((a, b) => a + b, 0)}</td>
    //         </tr>
    //       ))
    //     }
    //   </tbody>
    // </table>

    // <div className='flex flex-col justify-center items-center'>
    //   <div className='flex justify-between w-full'>
    //     <h3>Holes</h3>
    //     <div className='flex justify-between items-center gap-2'>
    //       {
    //         holePars.map((par, index) => (
    //           <h3 key={index}>{index + 1}</h3>
    //         ))
    //       }
    //     </div>
    //     <h3 className='text-right'>Total</h3>
    //   </div>
    //   <div className='flex justify-between w-full'>
    //     <h3 className='text-right'>Par</h3>
    //     <div className='flex justify-between items-center gap-2'>
    //       {
    //         holePars.map((par, index) => (
    //           <h3 key={index}>{par}</h3>
    //         ))
    //       }
    //     </div>
    //     <h3>
    //       {
    //         holePars.reduce((a, b) => a + b, 0)
    //       }
    //     </h3>
    //   </div>
    //   {
    //     currentGameData.players.map((player, index) => (
    //       <div key={player} className='flex justify-between w-full'>
    //         <h3 className='text-right'>{player}</h3>
    //         <div className='flex justify-between items-center gap-2'>
    //           {
    //             currentGameData.scores[index].map((score, index) => (
    //               <h3 key={index}>{score}</h3>
    //             ))
    //           }
    //         </div>
    //         <h3>{currentGameData.scores[index].reduce((a, b) => a + b, 0)}</h3>
    //       </div>
    //     ))
    //   }
    // </div>

    // <div className='flex justify-between max-w-2xl m-auto'>
    //   <div className=''>
    //     <h3 className='text-right'>Holes</h3>
    //     <h3 className='text-right'>Par</h3>
    //     {
    //       currentGameData.players.map((player, index) => (
    //         <h3 key={player}>{player}</h3>
    //       ))
    //     }
    //   </div>
    //   <div>
    //     <div className='grid grid-cols-18 text-right gap-2'>
    //       {
    //         holePars.map((par, index) => (
    //           <h3 key={index}>{index + 1}</h3>
    //         ))
    //       }
    //     </div>
    //     <div className='grid grid-cols-18 text-right gap-2'>
    //       {
    //         holePars.map((par, index) => (
    //           <h3 key={index}>{par}</h3>
    //         ))
    //       }
    //     </div>
    //     <div>
    //       {
    //         currentGameData.scores.map((playerScores, index) => (
    //           <div key={index} className='grid grid-cols-18 text-right gap-2'>
    //             {
    //               playerScores.map((score, index) => (
    //                 <p key={index}>{score}</p>
    //               ))
    //             }
    //           </div>
    //         ))
    //       }
    //     </div>
    //   </div>
    //   <div>
    //     <h3 className='text-right'>Total</h3>
    //     <h3>
    //       {
    //         holePars.reduce((a, b) => a + b, 0)
    //       }
    //     </h3>
    //     {
    //       currentGameData.scores.map((playerScores, index) => (
    //         <h3 key={index}>{playerScores.reduce((a, b) => a + b, 0)}</h3>
    //       ))
    //     }
    //   </div>
    // </div>
  )
}

export default Scoreboard