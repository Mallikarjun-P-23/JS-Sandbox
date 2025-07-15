        let isPlaying = false;
        let currentTrack = null;
        let volume = 70;

        // Track Data
        const tracks = {
            'chill-vibes': {
                name: 'Chill Vibes',
                type: 'Playlist',
                count: '24 songs'
            },
            'rock-classics': {
                name: 'Rock Classics',
                type: 'Album',
                count: '12 tracks'
            },
            'pop-hits': {
                name: 'Pop Hits',
                type: 'Playlist',
                count: '18 songs'
            },
            'jazz-lounge': {
                name: 'Jazz Lounge',
                type: 'Album',
                count: '8 tracks'
            }
        };

        
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const currentTrackName = document.getElementById('current-track-name');
        const volumeBar = document.getElementById('volume-bar');
        const volumeProgress = document.getElementById('volume-progress');
        const musicCards = document.querySelectorAll('.music-card');
        const actionCards = document.querySelectorAll('.action-card');

        
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            updatePlayButton();
        });

        function updatePlayButton() {
            if (isPlaying) {
                playIcon.className = 'fas fa-pause';
            } else {
                playIcon.className = 'fas fa-play';
            }
        }

        
        musicCards.forEach(card => {
            card.addEventListener('click', () => {
                const trackId = card.dataset.track;
                const track = tracks[trackId];
                
                if (track) {
                    currentTrack = track;
                    isPlaying = true;
                    updateCurrentTrack();
                    updatePlayButton();
                    
                    musicCards.forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                }
            });
        });

        function updateCurrentTrack() {
            if (currentTrack) {
                currentTrackName.textContent = `${currentTrack.name} - ${currentTrack.type}`;
            }
        }

        
        volumeBar.addEventListener('click', (e) => {
            const rect = volumeBar.getBoundingClientRect();
            const percentage = (e.clientX - rect.left) / rect.width * 100;
            volume = Math.max(0, Math.min(100, percentage));
            volumeProgress.style.width = volume + '%';
        });

        
        actionCards.forEach(card => {
            card.addEventListener('click', () => {
                const action = card.dataset.action;
             
                
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
              
                
                switch(action) {
    case 'library':
        window.location.href = '/library.html';
        break;
    case 'playlists':
        document.getElementById('playlist-section').style.display = 'block';
        document.getElementById('settings-section').style.display = 'none';
        break;
    case 'settings':
        document.getElementById('settings-section').style.display = 'block';
        document.getElementById('playlist-section').style.display = 'none';
        break;
}

            });
        });

        
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                isPlaying = !isPlaying;
                updatePlayButton();
            }
        });

        
        volumeProgress.style.width = volume + '%';

      
        document.querySelectorAll('.scrollable-section').forEach(section => {
            let isDown = false;
            let startX;
            let scrollLeft;

            section.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - section.offsetLeft;
                scrollLeft = section.scrollLeft;
            });

            section.addEventListener('mouseleave', () => {
                isDown = false;
            });

            section.addEventListener('mouseup', () => {
                isDown = false;
            });

            section.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - section.offsetLeft;
                const walk = (x - startX) * 2;
                section.scrollLeft = scrollLeft - walk;
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        