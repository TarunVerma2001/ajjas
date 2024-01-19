import uuid from "react-uuid";

export class Comment {
  constructor(votes, description) {
    this.id = uuid();
    this.votes = votes;
    this.description = description;
    this.comments = [];

    this.time = Date.now();
  }

  upVote() {
    this.votes++;
  }
  downVote() {
    this.votes--;
  }
}
