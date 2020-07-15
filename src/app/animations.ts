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

export let apear=trigger('apear',[
  transition('void=> *',[
    style({transform:'translateY(-5px)'}),
    animate(1000,style({transform:'translateY(5px)'}))

  ])
])

