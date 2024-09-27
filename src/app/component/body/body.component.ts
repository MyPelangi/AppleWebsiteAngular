import { Component } from '@angular/core';

@Component(
{
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent{
  _arrayModelOfProducts = [
    {
      imageUrl: 'https://img.freepik.com/premium-photo/phone-with-colors-sun-it_273179-6661.jpg?ga=GA1.1.1811519676.1727150559&semt=ais_hybrid',
      titleProduct: ' iPhone',
      summary1: 'Our most powerful cameras yet.',
      summary2: 'Ultrafast chips.And USB-C',
      buttonLeft: 'Learn more',
      buttonRight: 'Shop Iphone'
    },
    {
      imageUrl: 'https://img.freepik.com/free-photo/3d-robot-hand-background-ai-technology-side-view_53876-129789.jpg?semt=ais_hybrid',
      titleProduct: ' Apple Intelligence',
      summary1: 'AI For the rest of us.',
      summary2: 'Coming in beta this fall',
      buttonLeft: 'Learn more',
      buttonRight: 'Watch the film'
    },
    {
      imageUrl: 'https://img.freepik.com/free-vector/digital-tablet-mockup-brown-table_53876-118309.jpg?ga=GA1.1.1811519676.1727150559&semt=ais_hybrid',
      titleProduct: ' iPad Pro',
      summary1: 'Unbelievably thin. Incredibly powerful.',
      buttonLeft: 'Learn more',
      buttonRight: 'Buy'
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/apple-watch-mockup-with-black-screen-copy-space_380557-586.jpg?ga=GA1.1.1811519676.1727150559&semt=ais_hybrid',
      titleProduct: ' Watch',
      summary1: 'Series 9',
      summary2: 'Smarter.Brighter.Mightier',
      buttonLeft: 'Learn more',
      buttonRight: 'Shop Iphone'
    },
    {
      imageUrl: 'https://img.freepik.com/premium-vector/futuristic-glowing-low-polygonal-credit-card-isolated-dark-blue-background_67515-520.jpg?ga=GA1.1.1811519676.1727150559&semt=ais_hybrid',
      titleProduct: ' Card',
      summary1: 'Get up to 3% Daily cash back with every purchase.',
      summary2: 'Ultrafast chips.And USB-C',
      buttonLeft: 'Learn more',
      buttonRight: 'Apply now'
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/wireless-earbuds-with-compact-charging-case_724205-2079.jpg?ga=GA1.1.1811519676.1727150559&semt=ais_hybrid',
      titleProduct: ' AirPods 4',
      summary1: 'Iconic. Now supersonic.',
      summary2: 'Available with Active Noise Cancellation.',
      buttonLeft: 'Learn more',
      buttonRight: 'Buy'
    },
  ]

  _arrayModelOfFigures = [
    {
      position: 1,
      imageUrl: 'https://webneel.com/daily/sites/default/files/images/daily/01-2019/4-movie-poster-design-india-tamil-jetlee-prathoolnt.jpg',
      linkText: 'Stream Now',
      category: 'Crime',
      description: 'Presume nothing.',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 2,
      imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-a-compelling-movie-poster-background-image_15605697.jpg',
      linkText: 'Stream Now',
      category: 'Thriller',
      description: 'Amazing movie',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 3,
      imageUrl: 'https://wallpapers.com/images/hd/movie-poster-background-5mlqnzbzbwpziyed.jpg',
      linkText: 'Stream Now',
      category: 'Comedy',
      description: 'Laugh forever',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 4,
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/253/462/372/action-adventure-fantasy-film-wallpaper-preview.jpg',
      linkText: 'Stream Now',
      category: 'Crime',
      description: 'Presume nothing.',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 5,
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/46/288/23/action-attack-clones-film-wallpaper-preview.jpg',
      linkText: 'Stream Now',
      category: 'Horror',
      description: 'The Conjuring',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 6,
      imageUrl: 'https://images.thedirect.com/media/article_full/shang-chi-movie-poster.jpg',
      linkText: 'Stream Now',
      category: 'drama-family',
      description: 'Mirracle in cell no 7',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 7,
      imageUrl: 'https://mrwallpaper.com/images/hd/moody-rrr-movie-poster-l2aleq2qdpl3e6a3.jpg',
      linkText: 'Stream Now',
      category: 'Action',
      description: 'Tom Rider',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 8,
      imageUrl: 'https://wallpapers.com/images/hd/movie-poster-background-tvke0r6ko2jpix0j.jpg',
      linkText: 'Stream Now',
      category: 'Fiction',
      description: 'Amazing spiderman 3',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 9,
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/799/191/755/godzilla-movies-digital-art-movie-poster-wallpaper-preview.jpg',
      linkText: 'Stream Now',
      category: 'Horror',
      description: 'Annabelle',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    },
    {
      position: 10,
      imageUrl: 'https://w0.peakpx.com/wallpaper/31/267/HD-wallpaper-rampage-8k-poster-rampage-dwayne-johnson-2018-movies-movies-poster.jpg',
      linkText: 'Stream Now',
      category: 'Action',
      description: 'The big 4',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    }
  ]


  _numberDots: number[] = [];
  _numberCurrentIndex: number = 0;
  _anySlideInterval: any;
  _booleanIsPause: boolean = false;

  ngOnInit(): void
  {
    // Initialize dots array based on the number of figures
    this._numberDots = Array.from({ length: this._arrayModelOfFigures.length }, (_, index) => index);

    // Start the automatic sliding
    this.startSlideShow();

    this.duplicateImages();
  }

  // Method to switch to the selected slide when a dot is clicked
  currentSlide(index: number): void
  {
    this._numberCurrentIndex = index;
    this.pauseSlideShow();
  }

  // Helper method to check if the current slide is active
  isActiveSlide(index: number): boolean
  {
    return this._numberCurrentIndex === index;
  }

  // Start the slideshow (automatic sliding)
  startSlideShow(): void
  {
    this._anySlideInterval = setInterval(() => {
      this._numberCurrentIndex = (this._numberCurrentIndex + 1) % this._arrayModelOfFigures.length;
    }, 5000);
  }

  // Pause the slideshow when a dot is clicked
  pauseSlideShow(): void
  {
    setTimeout(() => {
      this._booleanIsPause = false;
    }, 5000);
  }


  _numberOfCurrentSlide: number = 0;
  _arrayModelOfGallery = [
    {
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkDMd6di4nFVmKdzCTzehQRBUBkwvzDHPjA&s',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: ' Arcade',
      action: 'Watch Now'
    },
    {
      imgUrl: 'https://www.gematsu.com/wp-content/uploads/2024/06/Hello-Kitty-Island-Adventure-Announced_06-18-24.jpg',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: 'Arcade',
      action: 'Watch Now'
    },
    {
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkDMd6di4nFVmKdzCTzehQRBUBkwvzDHPjA&s',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: ' Arcade',
      action: 'Watch Now'
    },
    {
      imgUrl: 'https://www.gematsu.com/wp-content/uploads/2024/06/Hello-Kitty-Island-Adventure-Announced_06-18-24.jpg',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: 'Arcade',
      action: 'Watch Now'
    },
    {
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkDMd6di4nFVmKdzCTzehQRBUBkwvzDHPjA&s',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: ' Arcade',
      action: 'Watch Now'
    },
    {
      imgUrl: 'https://www.gematsu.com/wp-content/uploads/2024/06/Hello-Kitty-Island-Adventure-Announced_06-18-24.jpg',
      title: 'Hellokitty Island Adventure',
      link: '#',
      category: 'Arcade',
      action: 'Watch Now'
    }
  ]

  duplicateImages() {
    this._arrayModelOfGallery = [...this._arrayModelOfGallery, ...this._arrayModelOfGallery];
  }
}
