export const setAdvice = () => {
    return async (dispatch, getState) => {
        const res = await fetch ("https://api.adviceslip.com/advice")
        const advice = await res.json()
        dispatch({
            type: "SET_ADVICE",
            payload: {
                id: advice.slip.id,
                text: advice.slip.advice
            }
        })
    }}
