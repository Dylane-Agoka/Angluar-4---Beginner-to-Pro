import { Component, createPlatform, OnInit } from '@angular/core';

@Component({
  selector: 'prepositions',
  templateUrl: './prepositions.component.html',
  styleUrls: ['./prepositions.component.scss']
})
export class PrepositionsComponent implements OnInit {

  prepositionsList: string[] = [];
  prepositions: string[] = [];
  public uniquePrepositions: string[] = [];

  englishPrepositions = {
    time: [
      'about', 'after', 'ago', 'around', 'at', 'before', 'by', 'circa', 'during', 'following',
      'for', 'from', 'gone', 'in', 'on', 'past', 'prior to', 'since', 'until', 'till', 'up to',
      'up until'
    ],
    place: [
      'aboard', 'above', 'across', 'against', 'alongside', 'amid', 'among', 'apart from',
      'astride', 'at', 'atop', 'behind', 'below', 'beneath', 'beside', 'between', 'beyond',
      'by', 'close to', 'far', 'far from', 'forward of', 'from', 'in', 'in between', 'in front',
      'of', 'inside', 'into', 'minus', 'near', 'near to', 'next to', 'of', 'off', 'on',
      'on board', 'on top of', 'onto', 'upon', 'opposite', 'out', 'out of', 'outside of', 'over',
      'round', 'through', 'throughout', 'to', 'together with', 'toward', 'towards',
      'whether this word ends with an -s depends on what region\'s English is being used.',
      'under', 'underneath', 'up against', 'with', 'within', 'without'
    ],
    movement: [
      'above', 'across', 'against', 'ahead', 'along', 'along with', 'amid', 'around', 'away',
      'away from', 'behind', 'below', 'beneath', 'by means of', 'down', 'further to',
      'in between', 'into', 'off', 'off of', 'on', 'onto', 'over', 'out of', 'past', 'round',
      'through', 'toward', 'towards', 'under', 'up', 'via'
    ],
    mannerAndPhrase: [
      'about', 'according', 'anti', 'as', 'as for', 'as per', 'as to', 'as well as',
      'aside from', 'bar', 'barring', 'because of', 'besides', 'but for', 'by', 'but',
      'concerning', 'considering', 'contrary to', 'counting', 'cum', 'depending on', 'despite',
      'due to', 'except', 'except for', 'excepting', 'excluding', 'given', 'in addition to',
      'in case of', 'in face of', 'in favor of', 'in favour of', 'in light of', 'in spite of',
      'in view of', 'including', 'instead of', 'less', 'like', 'notwithstanding', 'of',
      'on account of', 'on behalf of', 'other than', 'owing to', 'pending', 'per', 'plus',
      'preparatory to', 'pro', 're', 'regarding', 'regardless of', 'save', 'save for', 'saving',
      'than', 'thanks to', 'unlike', 'versus', 'with', 'with reference to', 'with regard to',
      'worth'
    ]
  };

  constructor() {
    for (const property in this.englishPrepositions) {
      this.prepositionsList.push(this.englishPrepositions[property]);
    }

    this.prepositionsList.forEach(pre =>  this.prepositions.push(...pre));
    this.prepositions.forEach(pre => !this.uniquePrepositions.includes(pre) && this.uniquePrepositions.push(pre));

    const sentence = 'THe rise of the planet of the Apes';
    // console.log(this.prepositionsList.flat()); Help to convert an array of array in array of 1 dimension
    console.log(this.getTitleCase(sentence));

  }

  ngOnInit(): void {
  }

  getTitleCase(args: string) {
    const words = args.split(' ');
    let wordsL: string[] = [];
    words.forEach(word =>
      !this.uniquePrepositions.includes(word) ?
      wordsL.push(word.charAt(0).toUpperCase() + word.slice(1)) :
      wordsL.push(word.toLowerCase()));
    return wordsL;
  }
}
