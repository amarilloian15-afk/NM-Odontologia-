import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickAction {
  label: string;
  hiddenInstruction: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '¡Hola! 👋\n\nSoy Jose de NM Odontología. ¿En qué te puedo ayudar hoy?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      label: '📅 Sacar turno',
      hiddenInstruction: 'Decime qué datos necesito para agendar o mencioná el botón de contacto. Máximo 2 líneas.'
    },
    {
      label: '📍 Ubicación',
      hiddenInstruction: 'Decime la dirección y horarios de forma muy breve, máximo 1 oración.'
    },
    {
      label: '🦷 Tratamientos',
      hiddenInstruction: 'Listá los tratamientos principales: Limpieza, Blanqueamiento, Ortodoncia e Implantes. Usá una lista corta.'
    }
  ];

  // Show button after 3 seconds
  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(buttonTimer);
  }, []);

  // Load hasOpenedChat from localStorage on mount
  useEffect(() => {
    const openedChat = localStorage.getItem('hasOpenedChat');
    if (openedChat === 'true') {
      setHasOpenedChat(true);
    }
  }, []);

  // Save hasOpenedChat to localStorage whenever it changes
  useEffect(() => {
    if (hasOpenedChat) {
      localStorage.setItem('hasOpenedChat', 'true');
    }
  }, [hasOpenedChat]);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chat_history');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show tooltip after button appears, only if user hasn't opened chat before
  // Show tooltip as soon as the button appears, unless chat was opened before
  useEffect(() => {
    if (!showButton || hasOpenedChat) return;
    setShowTooltip(true);
  }, [showButton, hasOpenedChat]);

  // Hide tooltip when the chat is opened (handled in button onClick)
  // No auto‑hide timer needed; tooltip remains until user opens chat.


  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        text: '¡Hola! 👋\n\nSoy Jose de NM Odontología. ¿En qué te puedo ayudar hoy?',
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
    localStorage.removeItem('chat_history');
  };

  const handleSendMessage = async (messageText: string, hiddenInstruction?: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const messageToSend = hiddenInstruction 
        ? `${messageText} [${hiddenInstruction}]`
        : messageText;

      const response = await fetch('/api/chat.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          history: messages,
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Lo siento, hubo un error al procesar tu mensaje.',
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, hubo un error de conexión. Por favor, intenta nuevamente.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (action: QuickAction) => {
    handleSendMessage(action.label, action.hiddenInstruction);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div
          className="fixed bottom-[88px] right-6 z-[110]"
          style={{
            animation: 'tooltipFadeIn 0.4s ease-out both',
          }}
        >
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl px-4 py-3 max-w-[220px]">
            <p className="text-[13px] text-slate-800 font-medium leading-snug">
              ¡Hola! Soy Jose ¿En qué puedo ayudarte hoy?👋
            </p>
            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-b border-r border-slate-200 rotate-45" />
          </div>
          <style>{`
            @keyframes tooltipFadeIn {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && showButton && (
        <button
          onClick={() => {
            setIsOpen(true);
            setShowTooltip(false);
            setHasOpenedChat(true);
          }}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-primary rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-bounce-in"
        >
          <div className="absolute inset-0 rounded-full bg-primary opacity-75 animate-chatPulseRing" />
          <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[calc(100vw-2rem)] max-w-[340px] sm:w-80 sm:right-6 sm:bottom-24 h-[85dvh] max-h-[600px] sm:h-[480px] sm:max-h-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideInBounce z-[100]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground shrink-0 border-b border-primary/20">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-serif text-xl font-medium">¡Hola! Soy Jose 👋</span>
              </div>
              <span className="text-xs text-primary-foreground/80 font-sans">Tu asistente virtual de NM Odontología</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-primary-foreground/80 hover:opacity-70 transition-opacity p-1"
                title="Limpiar chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:opacity-70 transition-opacity p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <p className="text-slate-500 text-sm">
                  ¡Hola! 👋 Soy el asistente virtual de NM Odontologia. ¿En qué te puedo ayudar hoy?
                </p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 ${
                    message.sender === 'user'
                      ? 'bg-slate-950 text-white rounded-2xl rounded-br-md'
                      : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-5 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-slate-100 bg-white shrink-0 flex flex-col gap-2 sm:gap-3">
            {/* Quick Actions */}
            <div className="flex flex-row overflow-x-auto gap-2 pb-1 scrollbar-hide whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleQuickAction(action)}
                  disabled={isTyping}
                  className="flex-shrink-0 bg-white border border-slate-200 text-slate-700 text-xs font-medium px-4 py-2.5 rounded-full shadow-sm hover:border-slate-900 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {action.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-slate-50 border-0 focus:ring-1 focus:ring-slate-900 rounded-xl py-3 px-4 text-base placeholder:text-slate-400 text-slate-800"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-slate-950 text-white hover:bg-slate-800 p-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 sm:px-5 sm:py-3 bg-slate-50 border-t border-slate-100 shrink-0">
            <p className="text-xs text-slate-400 text-center">Con tecnología de NM Odontología</p>
          </div>
        </div>
      )}
    </>
  );
}
