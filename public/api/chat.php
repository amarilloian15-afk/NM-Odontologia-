<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get the request body
$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['message'])) {
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

$message = $input['message'];
$history = isset($input['history']) ? $input['history'] : [];

// Groq API configuration
$apiKey = 'YOUR_GROQ_API_KEY'; // Replace with your actual Groq API key
$apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

// Build conversation history
$messages = [
    [
        'role' => 'system',
        'content' => 'Eres un asistente virtual amable y profesional de NM Odontologia, una clínica dental en Recoleta, Buenos Aires. Tu objetivo es ayudar a los pacientes con información sobre tratamientos dentales, horarios, ubicación y servicios generales. Responde de manera clara, empática y en español. Si no tienes información específica, sugiere que se comuniquen por WhatsApp o visiten la clínica.'
    ]
];

// Add conversation history
foreach ($history as $msg) {
    if ($msg['sender'] === 'user') {
        $messages[] = ['role' => 'user', 'content' => $msg['text']];
    } else {
        $messages[] = ['role' => 'assistant', 'content' => $msg['text']];
    }
}

// Add current message
$messages[] = ['role' => 'user', 'content' => $message];

// Prepare the API request
$data = [
    'model' => 'llama-3.3-70b-versatile',
    'messages' => $messages,
    'temperature' => 0.7,
    'max_tokens' => 500
];

// Initialize cURL
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

// Execute the request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Handle the response
if ($httpCode === 200) {
    $result = json_decode($response, true);
    $botResponse = $result['choices'][0]['message']['content'];
    echo json_encode(['response' => $botResponse]);
} else {
    echo json_encode(['error' => 'Failed to get response from Groq API']);
}
