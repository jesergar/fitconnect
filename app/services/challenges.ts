export const loadChallenges = async () => {
    const res = await fetch('/api/challenges')
    const data = await res.json()
    return data
  }
