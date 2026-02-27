'use client';

import React, { useEffect, useRef } from 'react';

const QRCode = ({ value, size = 80 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const qrSize = size;
    const cellSize = 4;
    const gridSize = qrSize / cellSize;

    // Simple QR code pattern generator (basic implementation)
    const generateQRPattern = (text) => {
      // This is a simplified QR code generator
      // In a real implementation, you'd use a proper QR code library like qrcode.js
      const pattern = [];
      const textHash = text.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);

      // Add corner markers (like real QR codes)
      const addCornerMarker = (pattern, startX, startY) => {
        for (let y = 0; y < 7; y++) {
          for (let x = 0; x < 7; x++) {
            if (startY + y < gridSize && startX + x < gridSize) {
              if (y === 0 || y === 6 || x === 0 || x === 6) {
                pattern[startY + y][startX + x] = true;
              } else if (y >= 2 && y <= 4 && x >= 2 && x <= 4) {
                pattern[startY + y][startX + x] = true;
              }
            }
          }
        }
      };

      for (let y = 0; y < gridSize; y++) {
        pattern[y] = [];
        for (let x = 0; x < gridSize; x++) {
          // Create a pattern based on the text hash
          const index = (y * gridSize + x + textHash) % 7;
          pattern[y][x] = index < 3;
        }
      }

      // Add corner markers
      addCornerMarker(pattern, 0, 0);
      addCornerMarker(pattern, gridSize - 7, 0);
      addCornerMarker(pattern, 0, gridSize - 7);

      return pattern;
    };

    const pattern = generateQRPattern(value);

    // Clear canvas with dark background
    ctx.fillStyle = '#1c1c1c';
    ctx.fillRect(0, 0, qrSize, qrSize);

    // Draw QR pattern with white squares
    ctx.fillStyle = '#ffffff';
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (pattern[y][x]) {
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }

    // Add subtle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, qrSize, qrSize);
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="w-full h-full"
    />
  );
};

export default QRCode;
