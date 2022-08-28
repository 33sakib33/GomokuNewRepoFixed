import { Board } from "./board";

export class Minimax{
	evaluationCount : number = 0;
	board : Board;
	winScore : number = 100000000;
	gameOver: boolean=false;
    constructor(board : Board) {
		this.board = board;
	}
	public getGameStatus():boolean{
		return this.gameOver;
	}
	public getWinScore() : number{
		return this.winScore;
	}

    public evaluateBoardForWhite( board : Board,  blacksTurn : boolean) {
		this.evaluationCount++; 
		
		var blackScore = this.getScore(board, true, blacksTurn);
		var whiteScore = this.getScore(board, false, blacksTurn);
		
		if(blackScore == 0) blackScore = 1.0;
		
		return whiteScore / blackScore;
	}

    public getScore( board : Board, forBlack : boolean, blacksTurn : boolean) {
		var boardMatrix = board.getBoardMatrix();

		return  this.evaluateHorizontal(boardMatrix, forBlack, blacksTurn) +
				this.evaluateVertical(boardMatrix, forBlack, blacksTurn) +
				this.evaluateDiagonal(boardMatrix, forBlack, blacksTurn);
	}

    public evaluateHorizontal(boardMatrix : number[][], forBlack : boolean, playersTurn : boolean) : number{
		
		var consecutive = 0;
		var blocks = 2;
		var score = 0;
		
		for(var i=0; i<boardMatrix.length; i++) {
			for(var j=0; j<boardMatrix[0].length; j++) {
				if(boardMatrix[i][j] == (forBlack ? 2 : 1)) {
					consecutive++;
				}
				else if(boardMatrix[i][j] == 0) {
					if(consecutive > 0) {
						blocks--;
						score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
						consecutive = 0;
						blocks = 1;
					}
					else {
						blocks = 1;
					}
				}
				else if(consecutive > 0) {
					score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
					consecutive = 0;
					blocks = 2;
				}
				else {
					blocks = 2;
				}
			}
			
			if(consecutive > 0) {
				score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
			}

			consecutive = 0;
			blocks = 2;
		}

		return score;
	}
	
	public evaluateVertical(boardMatrix : number[][], forBlack : boolean, playersTurn : boolean) : number{
		
		var consecutive = 0;
		var blocks = 2;
		var score = 0;
		
		for(var j=0; j<boardMatrix[0].length; j++) {
			for(var i=0; i<boardMatrix.length; i++) {
				if(boardMatrix[i][j] == (forBlack ? 2 : 1)) {
					consecutive++;
				}
				else if(boardMatrix[i][j] == 0) {
					if(consecutive > 0) {
						blocks--;
						score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
						consecutive = 0;
						blocks = 1;
					}
					else {
						blocks = 1;
					}
				}
				else if(consecutive > 0) {
					score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
					consecutive = 0;
					blocks = 2;
				}
				else {
					blocks = 2;
				}
			}
			if(consecutive > 0) {
				score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
				
			}
			consecutive = 0;
			blocks = 2;
			
		}
		return score;
	}

	public evaluateDiagonal(boardMatrix : number[][], forBlack : boolean, playersTurn : boolean) : number{
		
		var consecutive = 0;
		var blocks = 2;
		var score = 0;

		for (var k = 0; k <= 2 * (boardMatrix.length - 1); k++) {
		    var iStart = Math.max(0, k - boardMatrix.length + 1);
		    var iEnd = Math.min(boardMatrix.length - 1, k);
		    for (var i = iStart; i <= iEnd; ++i) {
		        var j = k - i;
		        
		        if(boardMatrix[i][j] == (forBlack ? 2 : 1)) {
					consecutive++;
				}
				else if(boardMatrix[i][j] == 0) {
					if(consecutive > 0) {
						blocks--;
						score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
						consecutive = 0;
						blocks = 1;
					}
					else {
						blocks = 1;
					}
				}
				else if(consecutive > 0) {
					score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
					consecutive = 0;
					blocks = 2;
				}
				else {
					blocks = 2;
				}
		        
		    }
		    if(consecutive > 0) {
				score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
				
			}
			consecutive = 0;
			blocks = 2;
		}
		for (var k = 1-boardMatrix.length; k < boardMatrix.length; k++) {
		    var iStart = Math.max(0, k);
		    var iEnd = Math.min(boardMatrix.length + k - 1, boardMatrix.length-1);
		    for (var i = iStart; i <= iEnd; ++i) {
		        var j = i - k;
		        
		        if(boardMatrix[i][j] == (forBlack ? 2 : 1)) {
					consecutive++;
				}
				else if(boardMatrix[i][j] == 0) {
					if(consecutive > 0) {
						blocks--;
						score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
						consecutive = 0;
						blocks = 1;
					}
					else {
						blocks = 1;
					}
				}
				else if(consecutive > 0) {
					score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
					consecutive = 0;
					blocks = 2;
				}
				else {
					blocks = 2;
				}
		        
		    }
		    if(consecutive > 0) {
				score += this.getConsecutiveSetScore(consecutive, blocks, forBlack == playersTurn);
				
			}
			consecutive = 0;
			blocks = 2;
		}
		return score;
	}

	public getConsecutiveSetScore(count : number , blocks : number, currentTurn : boolean) : number {
		var winGuarantee = 1000000;
		if(blocks == 2 && count < 5) return 0;

		switch(count) {
			case 5: {
				// 5 consecutive wins the game
				return this.winScore;
			}
			case 4: {
				if(currentTurn) return winGuarantee;
				else {
					if(blocks == 0) return winGuarantee/4;
					else return  Math.floor(Math.random() * (210 - 190 + 1)) + 190;
				}
			}

			case 3: {
				if(blocks == 0) {
					if(currentTurn) return  Math.floor(Math.random() * (50050 - 49950 + 1)) + 49950;
					else return Math.floor(Math.random() * (210 - 190 + 1)) + 190;
				}
				else {
					if(currentTurn) return Math.floor(Math.random() * (12 - 8 + 1)) + 8;
					else return Math.floor(Math.random() * (7 - 6 + 1)) + 6;
				}
			}
			case 2: {
				if(blocks == 0) {
					if(currentTurn) return Math.floor(Math.random() * (8 - 6 + 1)) + 6;
					else return Math.floor(Math.random() * (6 - 4 + 1)) + 4;
				}
				else {
					return Math.floor(Math.random() * (4 - 2 + 1)) + 2;
				}
			}
			case 1: {
				return 1;
			}
		}
		return this.winScore*2;
	}


    public calculateNextMove(depth : number) : number[]{
		
		var move : any=Array(2);
		var bestMove = this.searchWinningMove(this.board);
		// console.log("hello");
		if(bestMove != null ) {
			move[0] = (bestMove[1]);
			move[1] = (bestMove[2]);
			console.log("ekhane paisi")
			//this.gameOver=true;
			
		} else {
			bestMove = this.minimaxSearchAB(depth, this.board, true, -1.0, this.getWinScore());
			if(bestMove == null) {
				move = null;
			} else {
				move[0] = (bestMove[1]);
				move[1] = (bestMove[2]);
			}
		}
		
		this.evaluationCount=0;
		
		return move;
	}

    private minimaxSearchAB( depth : number,  board : any,  max : boolean,  alpha : number,  beta : number) : any{

		if(depth == 0) {
			var x = [this.evaluateBoardForWhite(board, !max), null, null];
			return x;
		}
		
		let allPossibleMoves:any = board.generateMoves();
		if(allPossibleMoves.length == 0) {
            var x = [this.evaluateBoardForWhite(board, !max), null, null];
			return x;
		}
		
		var bestMove : Array<number>=Array(3);
		// console.log(bestMove);

		if(max) {
			// console.log("in max")
			// console.log(allPossibleMoves.length);
			bestMove[0] = -1.0;
			// console.log(allPossibleMoves);
		
			for(let move of allPossibleMoves) {
				
				// console.log(move);
				let dummyBoard=board.clone();
                //var dummyBoard = board;
				// console.log(dummyBoard);
				dummyBoard.temporaryMove(move[1], move[0], false);
				var tempMove = this.minimaxSearchAB(depth-1, dummyBoard, !max, alpha, beta);
				
				// Updating alpha (alpha value holds the maximum score) 
				if((tempMove[0]) > alpha) {
					alpha = (tempMove[0]);
				}
				// Pruning with beta
				if((tempMove[0]) >= beta) {
					return tempMove;
				}
				if(tempMove[0] > bestMove[0]) {
					bestMove = tempMove;
					bestMove[1] = move[0];
					bestMove[2] = move[1];
				}
			}
		}
		else {

			bestMove[0] = 100000000.0;
			bestMove[1] = allPossibleMoves.at(0)?.at(0);
			bestMove[2] = allPossibleMoves.at(0)?.at(1);
			
            var move: any; 
			for(move of allPossibleMoves) {
				let dummyBoard=board.clone();

				dummyBoard.temporaryMove(move[1], move[0], true);
				var tempMove = this.minimaxSearchAB(depth-1, dummyBoard, !max, alpha, beta);
				
				// Updating beta (beta value holds the minimum score)
				if((tempMove[0]) < beta) {
					beta = (tempMove[0]);
				}
				// Pruning with alpha
				if((tempMove[0]) <= alpha) {
					return tempMove;
				}
				
				if(tempMove[0] < bestMove[0]) {
					bestMove = tempMove;
					bestMove[1] = move[0];
					bestMove[2] = move[1];
				}
			}
		}

		return bestMove;
	}

    private searchWinningMove(board : any) {
		var allPossibleMoves = board.generateMoves();
		var winningMove : Array<number>=Array(3);
		var move : any;

		for(move in allPossibleMoves) {
			this.evaluationCount++;
			// var dummyBoard : Board = { ...board};
			// let dummyBoard = structuredClone(board);
			let dummyBoard=board.clone();
			dummyBoard.temporaryMove(move[1], move[0], false);
			// console.log("here I am");
			// console.log(dummyBoard);
			// dummyBoard.addStone(move[1], move[0], false);
			
			if(this.getScore(dummyBoard,false,false) >= this.winScore) {
				winningMove[1] = move[0];
				winningMove[2] = move[1];
				return winningMove;
			}
		}
		return null;
	}
	
}