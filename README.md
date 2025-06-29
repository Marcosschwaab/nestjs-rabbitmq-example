# NestJS RabbitMQ Example

This is a simple NestJS project that demonstrates how to use RabbitMQ to publish and subscribe to messages.

## Prerequisites

- Node.js
- npm
- Docker (with a running RabbitMQ container)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Marcosschwaab/nestjs-rabbitmq-example.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nestjs-rabbitmq-example
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the RabbitMQ Docker container:**

   ```bash
   docker run -d --hostname my-rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
   ```

5. **Run the application:**

   ```bash
   npm run start
   ```

The application will be running on `http://localhost:3001`.

## Usage

To send a message to the RabbitMQ queue, you can send a POST request to the `/send` endpoint with a JSON body containing a `message` field:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message": "Your custom message here"}' http://localhost:3001/send
```

After sending the request, you should see a log in the console of the NestJS application indicating that a message has been received.