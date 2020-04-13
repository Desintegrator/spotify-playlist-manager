import { createSelector } from '@reduxjs/toolkit';
import { Playlist } from '../../models';
import { RootState } from '../root-state';

export const getPlaylistState = (state: RootState) => state.playlist;

export const getPlaylistsMap = createSelector(
  getPlaylistState,
  (state) => new Map(Object.entries(state.playLists))
);

export const getPlaylists = createSelector(getPlaylistsMap, (playlistsMap) => [
  ...playlistsMap.values(),
]);

export const getSelectedPlaylistIds = createSelector(
  getPlaylistState,
  (state) => state.selectedPlaylistIds
);

export const getSelectedPlaylists = createSelector(
  getPlaylistState,
  getSelectedPlaylistIds,
  (state, playlistIds) =>
    playlistIds
      .reduce<Playlist[]>(
        (playlists, playlistId) => [...playlists, state.playLists[playlistId]],
        []
      )
      .filter((playlist) => playlist !== undefined)
);
