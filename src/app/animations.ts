import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
export let fade=trigger('fade',[
  transition('void=> *',[
    style({opacity:0}),
    animate(3000,style({opacity:1}))

  ])
])

