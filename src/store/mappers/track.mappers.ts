import { Track } from '../../models';
import { PlaylistTrackObject } from '../../typings/spotify-api';
import { durationFromMilliseconds } from '../../utils';
import { mapToAlbum, mapToArtist } from './playlist.mappers';

export function mapToTrack(trackResponse: PlaylistTrackObject): Track {
  return {
    id: trackResponse.track.id || trackResponse.track.uri,
    name: trackResponse.track.name,
    duration: durationFromMilliseconds(trackResponse.track.duration_ms),
    album: mapToAlbum(trackResponse.track.album),
    artists: trackResponse.track.artists.map(mapToArtist),
    isLocal: trackResponse.is_local,
    spotifyId: trackResponse.track.id,
    spotifyUri: trackResponse.track.uri,
  };
}
