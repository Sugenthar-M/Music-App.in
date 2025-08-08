import React, { useState, useEffect, useRef } from 'react';
import { 
  FaPlay, FaPause, FaStepForward, FaStepBackward, 
  FaVolumeUp, FaVolumeMute, FaHeart, FaRegHeart, 
  FaRandom, FaRedo, FaBars, FaTimes, FaHome, 
  FaSearch, FaMusic, FaHistory, FaThumbsUp 
} from 'react-icons/fa';
import YouTube from 'react-youtube';

const MusicPlayer = () => {
  // Add your songs array here
   const songs = [
    {
      id: 1,
      title: 'Oray Oru Ooril',
      artist: 'Haricharan',
      album: 'Saivam',
      duration: '3:10',
      cover: 'https://i.ytimg.com/vi/WrJpZFjAa0Y/maxresdefault.jpg',
      youtubeId: 'WrJpZFjAa0Y',
      liked: false
    },
    {
      id: 2,
      title: 'Kaattu Payale',
      artist: 'Dhee',
      album: 'Soorarai Pottru',
      duration: '4:06',
      cover: 'https://i.ytimg.com/vi/vbApNvaaYbc/maxresdefault.jpg',
      youtubeId: 'vbApNvaaYbc',
      liked: false
    },
    {
      id: 3,
      title: 'Veyyon Silli',
      artist: 'Harish Sivaramakrishnan',
      album: 'Soorarai Pottru',
      duration: '5:04',
      cover: 'https://i.ytimg.com/vi/YKefRCfb3AY/maxresdefault.jpg',
      youtubeId: 'YKefRCfb3AY',
      liked: false
    },
    {
      id: 4,
      title: 'Rowdy Baby',
      artist: 'Dhanush, Dhee',
      album: 'Maari 2',
      duration: '4:44',
      cover: 'https://i.ytimg.com/vi/x6Q7c9RyMzk/maxresdefault.jpg',
      youtubeId: 'x6Q7c9RyMzk',
      liked: true
    },
    {
      id: 5,
      title: 'Vaathi Coming',
      artist: 'Anirudh Ravichander, Gana Balachandar',
      album: 'Master',
      duration: '3:50',
      cover: 'https://i.ytimg.com/vi/uU3tTXR2teY/maxresdefault.jpg',
      youtubeId: 'uU3tTXR2teY',
      liked: true
    },
    {
      id: 6,
      title: 'Enjoy Enjaami',
      artist: 'Dhee, Arivu',
      album: 'Maajja',
      duration: '4:39',
      cover: 'https://i.ytimg.com/vi/eYq7WapuDLU/maxresdefault.jpg',
      youtubeId: 'eYq7WapuDLU',
      liked: false
    },
    {
  id: 7,
  title: 'Kadhaippoma',
  artist: 'Sid Sriram',
  album: 'Oh My Kadavule',
  duration: '4:43', // as per YouTube listing
  cover: 'https://i.ytimg.com/vi/DScFlfN9vDk/maxresdefault.jpg',
  youtubeId: 'DScFlfN9vDk',
  liked: true
},
{
  id: 8,
  title: 'Myma',
  artist: 'G. V. Prakash Kumar',
  album: 'Enakku Innoru Per Irukku',
  duration: '3:22', // approximate
  cover: 'https://i.ytimg.com/vi/xOulP2H9Wps/maxresdefault.jpg',
  youtubeId: 'xOulP2H9Wps',
  liked: false
},
{
  id: 9,
  title: 'Pirai Thedum',
  artist: 'G. V. Prakash Kumar & Saindhavi',
  album: 'Mayakkam Enna',
  duration: '4:30', // approximate
  cover: 'https://i.ytimg.com/vi/XbgV9DYLG3k/maxresdefault.jpg',
  youtubeId: 'XbgV9DYLG3k',
  liked: false
},{
  id: 10,
  title: 'Otha Sollaala',
  artist: 'Velmurugan (singer), music by G. V. Prakash Kumar',
  album: 'Aadukalam',
  duration: '3:21', // approximate
  cover: 'https://i.ytimg.com/vi/O78Y6VnKeL8/maxresdefault.jpg',
  youtubeId: 'O78Y6VnKeL8',
  liked: false
},
{
  id: 11,
  title: 'Yaaro Ivan',
  artist: 'G. V. Prakash Kumar & Saindhavi',
  album: 'Udhayam NH4',
  duration: '4:22', // approximate
  cover: 'https://i.ytimg.com/vi/owJtXWUTdU0/maxresdefault.jpg',
  youtubeId: 'owJtXWUTdU0',
  liked: false
},
{
  id: 12,
  title: 'Yathe Yathe',
  artist: 'G. V. Prakash Kumar',
  album: 'Aadukalam',
  duration: '4:05', // approximate
  cover: 'https://i.ytimg.com/vi/0keMibV7Fg0/maxresdefault.jpg',
  youtubeId: '0keMibV7Fg0',
  liked: false
},
{
  id: 13,
  title: 'Oru Murai',
  artist: 'G. V. Prakash Kumar, Blaaze, Andrea Jeremiah',
  album: 'Muppozhudhum Un Karpanaigal',
  duration: '4:45', // approximate video length
  cover: 'https://i.ytimg.com/vi/S3zj0IUZPfs/maxresdefault.jpg',
  youtubeId: 'S3zj0IUZPfs',
  liked: false
},
{
  id: 14,
  title: 'Otha Sollaala',
  artist: 'Velmurugan (vocals), music by G. V. Prakash Kumar',
  album: 'Aadukalam',
  duration: '3:21', // approximate
  cover: 'https://i.ytimg.com/vi/O78Y6VnKeL8/maxresdefault.jpg',
  youtubeId: 'O78Y6VnKeL8',
  liked: false
},
{
  id: 15,
  title: 'Yathe Yathe',
  artist: 'G. V. Prakash Kumar',
  album: 'Aadukalam',
  duration: '5:44', // as listed on YouTube
  cover: 'https://i.ytimg.com/vi/GJYl_Z5vRFA/maxresdefault.jpg',
  youtubeId: 'GJYl_Z5vRFA',
  liked: false
}




  ];

  // State management
  const [currentSong, setCurrentSong] = useState(songs[0] || {});
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [searchTerm, setSearchTerm] = useState('');
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [songList, setSongList] = useState(songs);
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const progressInterval = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Update progress bar
  const updateProgress = () => {
    if (player && isPlaying) {
      player.getCurrentTime().then(time => {
        player.getDuration().then(duration => {
          const progressPercent = (time / duration) * 100;
          setProgress(progressPercent);
          setCurrentTime(formatTime(time));
          setDuration(formatTime(duration));
        });
      }).catch(error => {
        console.error("Error updating progress:", error);
      });
    }
  };

  // YouTube player options
  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1
    },
  };

  // Player event handlers
  const onReady = (event) => {
    setPlayer(event.target);
    event.target.setVolume(volume);
    if (isPlaying) event.target.playVideo();
    progressInterval.current = setInterval(updateProgress, 1000);
  };

  const onStateChange = (event) => {
    if (event.data === YouTube.PlayerState.ENDED) {
      if (repeat) {
        player.seekTo(0);
        player.playVideo();
      } else {
        nextSong();
      }
    } else if (event.data === YouTube.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      setIsPlaying(false);
    }
  };

  // Play/pause toggle
  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
    setIsPlaying(!isPlaying);
  };

  // Play specific song
  const playSong = (song) => {
    if (!song.youtubeId) return;
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime('0:00');
    clearInterval(progressInterval.current);
    
    if (player) {
      player.loadVideoById(song.youtubeId);
      player.playVideo();
      progressInterval.current = setInterval(updateProgress, 1000);
    }
  };

  // Skip to next song
  const nextSong = () => {
    if (songList.length === 0) return;
    
    let nextIndex;
    if (shuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songList.length);
      } while (songList.length > 1 && randomIndex === songList.findIndex(s => s.id === currentSong.id));
      nextIndex = randomIndex;
    } else {
      const currentIndex = songList.findIndex(s => s.id === currentSong.id);
      nextIndex = (currentIndex + 1) % songList.length;
    }
    playSong(songList[nextIndex]);
  };

  // Skip to previous song
  const prevSong = () => {
    if (songList.length === 0) return;
    
    const currentIndex = songList.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
    playSong(songList[prevIndex]);
  };

  // Volume control
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (player) {
      player.setVolume(newVolume);
      if (isMuted && newVolume > 0) setIsMuted(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (!player) return;
    if (isMuted) player.unMute();
    else player.mute();
    setIsMuted(!isMuted);
  };

  // Toggle like status
  const toggleLike = (songId) => {
    setSongList(songList.map(song => 
      song.id === songId ? {...song, liked: !song.liked} : song
    ));
    if (currentSong.id === songId) {
      setCurrentSong({...currentSong, liked: !currentSong.liked});
    }
  };

  // Toggle track status
  const toggleTrack = (songId) => {
    setSongList(songList.map(song => 
      song.id === songId ? {...song, tracked: !song.tracked} : song
    ));
    if (currentSong.id === songId) {
      setCurrentSong({...currentSong, tracked: !currentSong.tracked});
    }
  };

  // Filter songs based on search term
  const filteredSongs = songList.filter(song =>
    song.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  return (
    <div className="music-app">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="logo">
          {!sidebarCollapsed ? (
            <>
              <span style={{ color: '#1DB954' }}>Music</span> Player
              <button className="collapse-btn" onClick={toggleSidebar}>
                <FaTimes />
              </button>
            </>
          ) : (
            <button className="collapse-btn" onClick={toggleSidebar}>
              <FaBars />
            </button>
          )}
        </div>
        
        {!sidebarCollapsed && (
          <nav>
            <ul>
              <li 
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('home');
                  setSongList(songs);
                }}
              >
                <FaHome /> <span>Home</span>
              </li>
              <li 
                className={activeTab === 'search' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('search');
                  setSongList(songs);
                }}
              >
                <FaSearch /> <span>Search</span>
              </li>
              <li 
                className={activeTab === 'library' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('library');
                  setSongList(songs);
                }}
              >
                <FaMusic /> <span>Library</span>
              </li>
              <li 
                className={activeTab === 'history' ? 'active' : ''}
                onClick={() => setActiveTab('history')}
              >
                <FaHistory /> <span>History</span>
              </li>
              <li 
                className={activeTab === 'liked' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('liked');
                  setSongList(songs.filter(song => song.liked));
                }}
              >
                <FaThumbsUp /> <span>Liked Songs</span>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <header>
          {sidebarCollapsed && (
            <button className="menu-btn" onClick={toggleSidebar}>
              <FaBars />
            </button>
          )}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for songs, artists, or albums"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="user-profile">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
            {!sidebarCollapsed && <span>User</span>}
          </div>
        </header>

        {/* Playlist section */}
        <div className="playlist-section">
          <h2>
            {activeTab === 'liked' ? 'Liked Songs' : 
             activeTab === 'search' ? 'Search Results' : 
             'Popular Songs'}
          </h2>
          
          {filteredSongs.length === 0 ? (
            <div className="empty-state">
              <p>No songs found</p>
            </div>
          ) : (
            <div className="songs-grid">
              {filteredSongs.map(song => (
                <div 
                  key={song.id} 
                  className={`song-card ${currentSong.id === song.id ? 'active' : ''}`}
                  onClick={() => playSong(song)}
                  onMouseEnter={() => setIsHoveringCard(song.id)}
                  onMouseLeave={() => setIsHoveringCard(null)}
                >
                  <div className="card-image">
                    {song.cover && <img src={song.cover} alt={song.title} />}
                    <button 
                      className="play-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playSong(song);
                      }}
                      style={{
                        opacity: isHoveringCard === song.id || currentSong.id === song.id ? 1 : 0,
                        transform: isHoveringCard === song.id || currentSong.id === song.id ? 'translateY(0)' : 'translateY(10px)'
                      }}
                    >
                      {currentSong.id === song.id && isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                  <div className="song-info">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                  <div className="song-actions">
                    <span className="duration">{song.duration}</span>
                    <div className="action-buttons">
                      <button 
                        className={`track-button ${song.tracked ? 'tracked' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTrack(song.id);
                        }}
                      >
                        {song.tracked ? '✓' : '+'}
                      </button>
                      <button 
                        className="like-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(song.id);
                        }}
                      >
                        {song.liked ? <FaHeart color="#1DB954" /> : <FaRegHeart />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Player controls */}
      <div className="player-controls">
        <div className="song-info">
          {currentSong.cover && <img src={currentSong.cover} alt={currentSong.title} />}
          <div>
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist}</p>
          </div>
          <button 
            className="like-button"
            onClick={() => toggleLike(currentSong.id)}
          >
            {currentSong.liked ? <FaHeart color="#1DB954" /> : <FaRegHeart />}
          </button>
        </div>

        <div className="player-center">
          <div className="controls">
            <button 
              className={`control-button ${shuffle ? 'active' : ''}`}
              onClick={() => setShuffle(!shuffle)}
            >
              <FaRandom />
            </button>
            <button className="control-button" onClick={prevSong}>
              <FaStepBackward />
            </button>
            <button className="play-btn" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="control-button" onClick={nextSong}>
              <FaStepForward />
            </button>
            <button 
              className={`control-button ${repeat ? 'active' : ''}`}
              onClick={() => setRepeat(!repeat)}
            >
              <FaRedo />
            </button>
          </div>
          <div className="progress-container">
            <span>{currentTime}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => {
                const newProgress = e.target.value;
                setProgress(newProgress);
                if (player) {
                  player.getDuration().then(duration => {
                    const seekTo = (newProgress / 100) * duration;
                    player.seekTo(seekTo, true);
                  });
                }
              }}
              className="progress-bar"
              style={{
                background: `linear-gradient(to right, #1DB954 ${progress}%, #535353 ${progress}%)`
              }}
            />
            <span>{duration}</span>
          </div>
        </div>

        <div className="volume-control">
          <button className="control-button" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-bar"
            style={{
              background: `linear-gradient(to right, #1DB954 ${volume}%, #535353 ${volume}%)`
            }}
          />
        </div>
      </div>

      {/* YouTube Player */}
      <YouTube
        videoId={currentSong.youtubeId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
        style={{ display: 'none' }}
      />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Circular', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .music-app {
          display: grid;
          grid-template-columns: ${sidebarCollapsed ? '70px' : '240px'} 1fr;
          grid-template-rows: 1fr 90px;
          height: 100vh;
          background-color: #121212;
          color: white;
          overflow: hidden;
          transition: grid-template-columns 0.3s ease;
        }
        
        .sidebar {
          background-color: #000;
          padding: 24px;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .sidebar.collapsed {
          padding: 16px;
          align-items: center;
        }
        
        .logo {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #282828;
          display: flex;
          justify-content: space-between;
          align-items: center;
          white-space: nowrap;
        }
        
        .collapse-btn {
          background: none;
          border: none;
          color: #b3b3b3;
          font-size: 16px;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .collapse-btn:hover {
          color: white;
        }
        
        nav ul {
          list-style: none;
          flex-grow: 1;
        }
        
        nav li {
          padding: 12px 0;
          cursor: pointer;
          color: #b3b3b3;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        
        nav li.active {
          color: white;
        }
        
        nav li:hover {
          color: white;
        }
        
        .main-content {
          padding: 24px;
          overflow-y: auto;
          background: linear-gradient(#1E1E1E, #121212);
          max-height: calc(100vh - 90px);
        }
        
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        
        .menu-btn {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          margin-right: 20px;
          cursor: pointer;
        }
        
        .search-bar {
          position: relative;
          width: 350px;
        }
        
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #b3b3b3;
        }
        
        .search-bar input {
          padding: 12px 16px 12px 40px;
          border-radius: 20px;
          border: none;
          width: 100%;
          background-color: #282828;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }
        
        .search-bar input:focus {
          background-color: #383838;
        }
        
        .user-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #282828;
          padding: 4px 12px 4px 4px;
          border-radius: 20px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .user-profile:hover {
          background-color: #383838;
        }
        
        .user-profile img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .user-profile span {
          font-size: 14px;
          font-weight: 600;
        }
        
        .playlist-section h2 {
          margin-bottom: 24px;
          font-size: 24px;
          font-weight: 700;
        }
        
        .empty-state {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          color: #b3b3b3;
          font-size: 16px;
        }
        
        .songs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 24px;
        }
        
        .song-card {
          background-color: #181818;
          padding: 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .song-card:hover {
          background-color: #282828;
          transform: translateY(-4px);
        }
        
        .song-card.active {
          background-color: rgba(30, 215, 96, 0.1);
        }
        
        .card-image {
          position: relative;
          margin-bottom: 16px;
        }
        
        .song-card img {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 4px;
          object-fit: cover;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s;
        }
        
        .song-card:hover img {
          transform: scale(1.02);
        }
        
        .play-button {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 45px;
          height: 45px;
          background-color: #1DB954;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .play-button:hover {
          transform: scale(1.05) translateY(0);
          background-color: #1ed760;
        }
        
        .song-info {
          min-height: 62px;
        }
        
        .song-info h3 {
          font-size: 16px;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .song-info p {
          font-size: 14px;
          color: #B3B3B3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .song-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
        }
        
        .duration {
          color: #B3B3B3;
          font-size: 12px;
        }
        
        .action-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .track-button {
          background: none;
          border: 1px solid #b3b3b3;
          color: #b3b3b3;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 12px;
        }
        
        .track-button.tracked {
          background: white;
          color: black;
          border-color: white;
        }
        
        .track-button:hover {
          transform: scale(1.1);
        }
        
        .like-button {
          background: none;
          border: none;
          color: #B3B3B3;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .like-button:hover {
          color: #1DB954;
          transform: scale(1.1);
        }
        
        .player-controls {
          grid-column: 1 / 3;
          background-color: #181818;
          border-top: 1px solid #282828;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          z-index: 10;
          height: 90px;
          position: sticky;
          bottom: 0;
        }
        
        .player-controls .song-info {
          display: flex;
          align-items: center;
          width: 300px;
          gap: 14px;
        }
        
        .player-controls .song-info img {
          width: 56px;
          height: 56px;
          border-radius: 4px;
        }
        
        .player-controls .song-info h4 {
          font-size: 14px;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }
        
        .player-controls .song-info p {
          font-size: 12px;
          color: #B3B3B3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }
        
        .player-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40%;
        }
        
        .controls {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          gap: 16px;
        }
        
        .control-button {
          background: none;
          border: none;
          color: #B3B3B3;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .control-button:hover {
          color: white;
          transform: scale(1.1);
        }
        
        .control-button.active {
          color: #1DB954;
        }
        
        .play-btn {
          background-color: white;
          color: black;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .play-btn:hover {
          transform: scale(1.05);
        }
        
        .progress-container {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 8px;
        }
        
        .progress-container span {
          font-size: 11px;
          color: #B3B3B3;
          min-width: 40px;
        }
        
        .progress-bar {
          flex-grow: 1;
          height: 4px;
          -webkit-appearance: none;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          transition: height 0.2s;
        }
        
        .progress-bar:hover {
          height: 6px;
        }
        
        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .progress-bar:hover::-webkit-slider-thumb {
          opacity: 1;
        }
        
        .volume-control {
          display: flex;
          align-items: center;
          width: 150px;
          gap: 8px;
        }
        
        .volume-bar {
          flex-grow: 1;
          height: 4px;
          -webkit-appearance: none;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          transition: height 0.2s;
        }
        
        .volume-bar:hover {
          height: 6px;
        }
        
        .volume-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .volume-bar:hover::-webkit-slider-thumb {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;