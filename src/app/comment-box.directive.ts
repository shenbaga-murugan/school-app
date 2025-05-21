import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[quoteCommentBox]',
  standalone: false
})
export class CommentBoxDirective {
  @Input('minChars')
  minChars: number = 0;

  @Input('maxChars')
  maxChars: number = 10;

  defaultCommentText = "Type your comment here..."

  constructor(private textElem: ElementRef) { 
    this.textElem.nativeElement.value = this.defaultCommentText;
  }

  @HostListener('click')
  onBoxClick() {
    this.textElem.nativeElement.value = "";
  }

  @HostListener('blur')
  onBoxBlur() {
    let enteredComment: string = this.textElem.nativeElement.value;
    enteredComment = enteredComment.length > this.maxChars ? enteredComment.substring(0, this.maxChars) : enteredComment;
    enteredComment = enteredComment.length < this.minChars ? enteredComment + " <your comment is too short>" : enteredComment;
    this.textElem.nativeElement.value = enteredComment;
  }

}
