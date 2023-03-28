const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
    ];
  
  
  // const byProperty = (property, direction) => {
  //   const modif = {
  //     '>': 1,
  //     '<': -1
  //   }
  //   const compareFunc = (a, b) => {
  //     if (a[property] < b[property]) {
  //       return -1 * modif[direction];
  //     }
  //     if (a[property] > b[property]) {
  //       return 1 * modif[direction];
  //     }
  //     return 0;
  //   }
  //   return compareFunc;
  // }

  const byProperty = (property, direction) => {
    const compareFunc = (a, b) => {
      if (a[property] < b[property]) {
        return direction === '>' ? -1 : 1;
    }
      return direction === '>' ? 1 : -1;
  }
    return compareFunc;
  }
  // console.log(movies.sort(byProperty('releaseYear', '>')));
  // console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
  // console.log(movies.sort(byProperty('movieName', '>')));
  // console.log(movies.sort(byProperty('directedBy', '>')));