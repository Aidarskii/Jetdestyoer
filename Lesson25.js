const rps = (p1, p2) => {
    switch(true) {
        case p1 == p2:
          return 'Draw!'
        case p1 == 'scissors' && p2 == 'paper':
        case p1 == 'paper' && p2 == 'rock':
        case p1 == 'rock' && p2 == 'scissors':
          return 'Player 1 won!'
        default:
          return 'Player 2 won!'
        
    }
  };