
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),


    knex('posts').insert({
      author: 'Hermit the Crab',
      title: 'grow here please seriously',
      address: '123 fake st, des moines, IA',
      picture_url: 'http://media-cdn.tripadvisor.com/media/photo-s/06/46/99/e8/luv-it-frozen-custard.jpg',
      description: 'The station was signed on in June 1994 by the original owner, Bay View Broadcasting. The original call letters were WXYQ and the station adopted an oldies format. Those call letters were previously used by an AM country station in Stevens Point, Wisconsin. Patrick Lopeman, who was also known as Pat Martin, was the principal owner and founder. WXYQ was sold to Crystal Clear Communications of Frankfort, Michigan for $200,000.00 in January, 1997. When new stations arrived in 1999, the new FCC rules allowed WXYQ to be consolidated into the Lake Michigan Broadcasting Group headed by Roger Baerwolf. When the FCC transfer was approved for $380,000.00 in 2000, Lake Michigan Broadcasting changed the call letters. The new call signs became WMTE-FM to reflect the co-ownership of its existing AM station WMTE. Baerwolf died suddenly in December 2004.'
    }),
    knex('posts').insert({
      author: 'Mr. Crazy Bird', 
      title: 'I have a good place to grow watermelons and pears',
      address: 'your moms house',
      picture_url: 'http://www.funnyanimalsite.com/pictures/Crazy-bird.jpg',
      description: 'The station was signed on in June 1994 by the original owner, Bay View Broadcasting. The original call letters were WXYQ and the station adopted an oldies format. Those call letters were previously used by an AM country station in Stevens Point, Wisconsin. Patrick Lopeman, who was also known as Pat Martin, was the principal owner and founder. WXYQ was sold to Crystal Clear Communications of Frankfort, Michigan for $200,000.00 in January, 1997. When new stations arrived in 1999, the new FCC rules allowed WXYQ to be consolidated into the Lake Michigan Broadcasting Group headed by Roger Baerwolf. When the FCC transfer was approved for $380,000.00 in 2000, Lake Michigan Broadcasting changed the call letters. The new call signs became WMTE-FM to reflect the co-ownership of its existing AM station WMTE. Baerwolf died suddenly in December 2004.'
      })

  );
};
