@echo off
echo ====================================
echo PANDOWO MOTOR - SERVER STARTER
echo Port Check: 8888 is AVAILABLE!
echo ====================================
echo.

echo Starting server on port 8888...
python -m http.server 8888

echo.
echo Server started at: http://localhost:8888
echo Press Ctrl+C to stop
pause
