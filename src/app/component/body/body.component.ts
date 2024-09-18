import { Component } from '@angular/core';

@Component(
{
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class _bodyComponent
{
  products = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUd5slHL5adwDL8TxpEsESk01qN8dGV0Xeg&s',
      titleProduct: ' iPhone',
      summary1: 'Our most powerful cameras yet.',
      summary2: 'Ultrafast chips.And USB-C',
      buttonLeft: 'Learn more',
      buttonRight: 'Shop Iphone'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMCyKnOdoKVxR53ycgiPS5pphJu44oVcQbPcir98vsZriDgnMAMBw6EV4Kza5s2dj0Gg&usqp=CAU',
      titleProduct: ' Apple Intelligence',
      summary1: 'AI For the rest of us.',
      summary2: 'Coming in beta this fall',
      buttonLeft: 'Learn more',
      buttonRight: 'Watch the film'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUd5slHL5adwDL8TxpEsESk01qN8dGV0Xeg&s',
      titleProduct: ' iPad Pro',
      summary1: 'Unbelievably thin. Incredibly powerful.',
      buttonLeft: 'Learn more',
      buttonRight: 'Buy'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMCyKnOdoKVxR53ycgiPS5pphJu44oVcQbPcir98vsZriDgnMAMBw6EV4Kza5s2dj0Gg&usqp=CAU',
      titleProduct: ' Watch',
      summary1: 'Series 9',
      summary2: 'Smarter.Brighter.Mightier',
      buttonLeft: 'Learn more',
      buttonRight: 'Shop Iphone'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0p05rsJrFCe2GxnRLXVoXUnJ09QxAY1c0da2yQlIf4Jf8GqXZk4lgL3fqLulyo6BX818&usqp=CAU',
      titleProduct: ' Card',
      summary1: 'Get up to 3% Daily cash back with every purchase.',
      summary2: 'Ultrafast chips.And USB-C',
      buttonLeft: 'Learn more',
      buttonRight: 'Apply now'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMCyKnOdoKVxR53ycgiPS5pphJu44oVcQbPcir98vsZriDgnMAMBw6EV4Kza5s2dj0Gg&usqp=CAU',
      titleProduct: ' Trade In',
      summary1: 'Get $170-$620 in credit when you trade in iPhone 11 or higher.',
      buttonLeft: 'Get your estimate'
    },
  ]

  figures = [
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
    },
    {
      position: 1,
      imageUrl: 'https://webneel.com/daily/sites/default/files/images/daily/01-2019/4-movie-poster-design-india-tamil-jetlee-prathoolnt.jpg',
      linkText: 'Stream Now',
      category: 'Crime',
      description: 'Presume nothing.',
      logoUrl: 'https://www.reviews.org/app/uploads/2020/12/apple-tv-300x188.png'
    }
  ]

  dots: number[] = [];
  currentIndex: number = 0;
  slideInterval: any;
  isPaused: boolean = false;

  ngOnInit(): void
  {
    // Initialize dots array based on the number of figures
    this.dots = Array.from({ length: this.figures.length }, (_, index) => index);

    // Start the automatic sliding
    this.startSlideShow();
  }

  // Method to switch to the selected slide when a dot is clicked
  currentSlide(index: number): void
  {
    this.currentIndex = index;
    this.pauseSlideShow();
  }

  // Helper method to check if the current slide is active
  isActiveSlide(index: number): boolean
  {
    return this.currentIndex === index;
  }

  // Start the slideshow (automatic sliding)
  startSlideShow(): void
  {
    this.slideInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.figures.length;
    }, 5000);
  }

  // Pause the slideshow when a dot is clicked
  pauseSlideShow(): void
  {
    setTimeout(() => {
      this.isPaused = false;
    }, 5000);
  }
}
