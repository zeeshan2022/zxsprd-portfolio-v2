---
title: Real-Time Multi-Speaker Voice Biometrics & Live Transcription Pipeline
client: Confidential Enterprise Client
year: "2026"
image: /images/uploads/ai-voice-transcribe-live.jpg
excerpt: Architected and deployed an ultra-low-latency real-time voice biometric
  and audio transcription engine on Oracle Cloud Infrastructure. Integrated
  WebSocket streaming, CPU-optimized Whisper model inference, and
  192-dimensional ECAPA-TDNN voice vector matching to deliver real-time
  multi-speaker identification without pre-enrollment.
tech:
  - Python 3.9,
  - FastAPI
  - WebSockets
  - faster-whisper,
  - peechBrain (ECAPA-TDNN)
  - PyTorch
  - NumPy
  - FFmpeg
  - Oracle Linux 9
  - OCI VM
---
<section class="project-detail">

<h3>Real-Time Multi-Speaker Voice Biometrics & Live Transcription Pipeline</h3>

<div class="project-overview">

<h4>Project Overview</h4>

<p>Designed, engineered, and optimized an enterprise-grade, real-time voice biometric and multi-speaker speech-to-text pipeline hosted on an Oracle Linux 9 VM in Oracle Cloud Infrastructure (OCI). Connected via a secure Site-to-Site IPsec VPN, the system ingests raw 16kHz PCM audio streams directly from remote workstation microphones over WebSocket connections. The platform performs real-time audio chunking, contextual transcription, and dynamic speaker identification by comparing 192-dimensional deep learning voice embeddings in parallel.</p>

</div>

<div class="architecture-design">

<h4>System Architecture & Workflow</h4>

<p>The solution replaces traditional file-upload audio pipelines with a low-latency, full-duplex WebSocket streaming model. Audio captured locally via client-side PyAudio streams is broken into discrete 3-second PCM byte buffers and transmitted continuously over port 8000. On the server side, an asynchronous FastAPI backend processes incoming frames in memory without disk I/O bottlenecks. Text generation is handled by <code>faster-whisper</code> configured for float32 CPU execution, while speaker identification executes concurrently using SpeechBrain’s <code>spkrec-ecapa-voxceleb</code> deep neural network architecture.</p>

</div>

<div class="key-contributions">

<h4>Key Technical Contributions</h4>

<div class="contribution-item">

<p><strong>Asynchronous Streaming Pipeline:</strong> Built a high-throughput FastAPI WebSocket server handling continuous 16kHz 16-bit mono PCM audio buffers, converting raw bytes directly into normalized float32 NumPy arrays for zero-copy downstream inference.</p>

</div>

<div class="contribution-item">

<p><strong>Optimized Speech-to-Text Engine:</strong> Integrated <code>faster-whisper</code> utilizing the float32 compute type to deliver consistent, accurate text transcriptions with sub-second latency on standard CPU compute instances.</p>

</div>

<div class="contribution-item">

<p><strong>Dynamic Voice Biometric Diarization:</strong> Leveraged SpeechBrain’s ECAPA-TDNN model to extract normalized 192-dimensional speaker embeddings per audio chunk. Developed a cosine similarity matching engine that dynamically identifies new speakers on the fly, assigns randomized identities (e.g., <em>Alex, Jordan, Taylor</em>), and maintains persistent voice profiles across ongoing streams.</p>

</div>

<div class="contribution-item">

<p><strong>Rolling Vector Profile Refinement:</strong> Implemented a moving-average embedding update algorithm (<code>0.8 \* profile + 0.2 \* new_sample</code>) that continuously refines enrolled voice vectors as speakers continue talking, accounting for pitch shifts and vocal dynamics.</p>

</div>

<div class="contribution-item">

<p><strong>Persistent Biometric Enrollment API:</strong> Engineered an HTTP <code>/enroll</code> endpoint and JSON storage layer that allows pre-registering verified user voiceprints via WAV audio samples for automated identity verification during live streams.</p>

</div>

</div>

<div class="problem-solving">

<h4>Acoustic Tuning & Problem Solving</h4>

<p>Overcame critical production challenges including WebSocket handshake failures under Uvicorn by configuring dedicated <code>websockets</code> backend protocols. To resolve "false speaker proliferation"—where natural pitch variation caused the system to spawn excessive new speaker identities—the cosine similarity threshold was empirically tuned from <code>0.25</code> to <code>0.52</code> alongside audio vector normalization, establishing high verification accuracy across real-world room acoustics.</p>

</div>

<div class="project-demo">

<h4>Project Demonstration</h4>

<p>Watch the full end-to-end demonstration of the real-time transcription and voice biometric pipeline in action on YouTube:</p>

<p><a href="https://youtu.be/msJwpL3aoEc" target="_blank" rel="noopener noreferrer">Watch Real-Time Multi-Speaker Voice Biometrics Demo on YouTube</a></p>

</div>

</section>
