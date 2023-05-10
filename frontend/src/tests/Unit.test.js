import React from "react";
import { act } from "react-dom/test-utils";
import SearchResults from "../components/SearchResults";

let targetContainerEl = null;

const mockData = {
  wrapperType: "track",
  kind: "song",
  artistId: 909253,
  collectionId: 120954021,
  trackId: 120954025,
  artistName: "Jack Johnson",
  collectionName: "Sing-a-Longs and Lullabies for the Film Curious George",
  trackName: "Upside Down",
  collectionCensoredName:
    "Sing-a-Longs and Lullabies for the Film Curious George",
  trackCensoredName: "Upside Down",
  artistViewUrl:
    "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewArtist?id=909253",
  collectionViewUrl:
    "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
  trackViewUrl:
    "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441",
  previewUrl:
    "http://a1099.itunes.apple.com/r10/Music/f9/54/43/mzi.gqvqlvcq.aac.p.m4p",
  artworkUrl60:
    "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.60x60-50.jpg",
  artworkUrl100:
    "http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.100x100-75.jpg",
  collectionPrice: 10.99,
  trackPrice: 0.99,
  collectionExplicitness: "notExplicit",
  trackExplicitness: "notExplicit",
  discCount: 1,
  discNumber: 1,
  trackCount: 14,
  trackNumber: 1,
  trackTimeMillis: 210743,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Rock",
};

test("value changes when addToFavourites click event is fired", () => {
  //  Mock the handleAddToFavourites event handler function using jest
  const handleAddToFavouriteItunes = jest.fn();
  //   Action of rendering the component on the jestdom
  act(() => {
    (
      <SearchResults
        musicItem={mockData}
        isFromStore={true}
        handleAddToFavouriteItunes={handleAddToFavouriteItunes}
      />
    ),
      targetContainerEl;
  });
});
