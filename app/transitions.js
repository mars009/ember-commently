// Transitions always exports a function as the default and everything
// is done within that function
export default function() {
  // We setup our transition to work on children of the '.comment-count'
  this.transition(
    this.childOf('.comment-count'),
    this.use('toUp')
  );
}