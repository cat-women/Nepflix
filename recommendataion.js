const movies = [
  {
    id: 1,
    reviews: [
      { userId: 1, rating: 5 },
      { userId: 2, rating: 4 },
      { userId: 4, rating: 1 },
      { userId: 6, rating: 1.5 },
      { userId: 7, rating: 4 }
    ]
  },

  {
    id: 2,
    reviews: [
      { userId: 2, rating: 3 },
      { userId: 4, rating: 4 },
      { userId: 6, rating: 1.5 },
      { userId: 7, rating: 4 }
    ]
  },

  {
    id: 3,
    reviews: [{ userId: 4, rating: 5 }, { userId: 5, rating: 4 }]
  },

  {
    id: 4,
    reviews: [{ userId: 5, rating: 1 }]
  },

  {
    id: 5,
    reviews: [
      { userId: 2, rating: 3 },
      { userId: 4, rating: 4 },
      { userId: 5, rating: 1.5 },
      { userId: 7, rating: 4 }
    ]
  }
]
const users = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 }
]   

function getRecommendataion(targetUid) {
  /**
     * 1 get all movies 
     * 2. get all users 
     * 3. 
     */
  let watchedList = []
  let sim = []

  users.forEach(user => {
    let preference = []
    // to make watched list matrix

    movies.forEach(movie => {
      const watched = movie.reviews.some(review => review.userId === user.id)
      preference.push(watched ? 1 : 0)
    })
    watchedList.push({ userId: user.id, watched: preference })
  })

  //   get target user watched list
  const targetUserWatchedList = watchedList.find(
    entry => entry.userId === targetUid
  )

  //   calculate similarity of all user with target user
  watchedList.forEach(watched => {
    if (watched.userId === targetUid) return

    let simValue = cosSimilarity(targetUserWatchedList.watched, watched.watched)

    sim.push({ userId: watched.userId, value: simValue })
  })

  //   if any similarity value is not a number (NaN) remove it
  const similarity = sim.filter(entry => !isNaN(entry.value))

  //   sort similarity in accending order
  similarity.sort((a, b) => b.value - a.value)

  console.log('similarty', similarity)

  //   get movies that target user not watched

  const moviesToRecommend = movies.filter(movie => {
    return !movie.reviews.some(review => review.userId === targetUid)
  })

  //   Top to similar user
  let topSimilarity = similarity.slice(0, moviesToRecommend.length)

  console.log('top similarity', topSimilarity)

  //   consider user rating for that movie
  moviesToRecommend.forEach(movie => {
    let weight = []
    topSimilarity.forEach(sim => {
      let rating = movie.reviews.find(review => review.userId === sim.userId)
      weight.push(rating ? sim.value * rating.rating : sim.value)
    })

    weight.sort((a, b) => b - a)
    movie.weight = weight[0]
  })

  moviesToRecommend.sort((a, b) => b.weight - a.weight)
  return moviesToRecommend
}

function cosSimilarity(a, b) {
  const dotProduct = a.reduce((acc, cur, index) => {
    acc += cur * b[index]
    return acc
  }, 0)
  const aMagnitude = Math.sqrt(
    a.reduce((sum, element) => sum + Math.pow(element, 2), 0)
  )
  const bMagnitude = Math.sqrt(
    b.reduce((sum, element) => sum + Math.pow(element, 2), 0)
  )
  const cosineSimilarity = dotProduct / (aMagnitude * bMagnitude)
  return Math.round(cosineSimilarity * 100) / 100
}

// driver code, user id = 7
console.log(getRecommendataion(4))
