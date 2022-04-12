var ffi = require('ffi-napi');

// Import oggex libraries

const OGGEX_DIR = 'lib/oggex';
const LIB_DIR = `${OGGEX_DIR}/build/debug`;
const AUDIO_DIR = `${LIB_DIR}/src/audio`;
const UTILITY_DIR = `${LIB_DIR}/src/utility`;

var libutility = ffi.Library('/usr/local/lib/libutility.so', {});

// Utility
var libaudio = ffi.Library(`${UTILITY_DIR}/libaudio.so`, {
});

var libcmd = ffi.Library(`${UTILITY_DIR}/libcmd.so`, {
});

var libfile = ffi.Library(`${UTILITY_DIR}/libfile.so`, {
});

var libimage = ffi.Library(`${UTILITY_DIR}/libimage.so`, {
});

// Audio
var liboggex = ffi.Library(`${AUDIO_DIR}/liboggex.so`, {
});

