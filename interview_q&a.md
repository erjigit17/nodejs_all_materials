
### Основы и продвинутые функции Node.js

#### 1. Обработка асинхронных операций (callbacks, promises, async/await)

- **Callbacks**:

  ```js
  const fs = require('fs');

  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

  console.log('This message is logged first.');
  ```

- **Promises**:

  ```js
  const fs = require('fs').promises;

  fs.readFile('file.txt')
    .then(data => {
      console.log(data.toString());
    })
    .catch(err => {
      console.error(err);
    });

  console.log('This message is logged first.');
  ```

- **Async/Await**:

  ```js
  const fs = require('fs').promises;

  async function readFile() {
    try {
      const data = await fs.readFile('file.txt');
      console.log(data.toString());
    } catch (err) {
      console.error(err);
    }
  }

  readFile();
  console.log('This message is logged first.');
  ```

#### 2. Event Loop и его работа

Event Loop — это механизм, который позволяет Node.js выполнять неблокирующие операции, несмотря на то, что JavaScript однопоточен. Это достигается за счет обработки колбэков и других асинхронных операций в цикле событий.

Пример:

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```

Вывод будет следующим:
```
Start
End
Promise
Timeout
```

#### 3. Управление памятью и оптимизация производительности

Для управления памятью и оптимизации производительности в Node.js можно использовать такие инструменты, как V8 Profiler и Garbage Collector.

Пример использования Garbage Collector:

```js
if (global.gc) {
  global.gc();
} else {
  console.log('Garbage collection is not exposed');
}

// Пример утечки памяти
const leakyArray = [];

function leakyFunction() {
  leakyArray.push(new Array(1000).fill('leak'));
}

setInterval(leakyFunction, 1000);
```

### Основные концепции и структура приложения NestJS

#### 1. Основные концепции и структура приложения NestJS

NestJS — это прогрессивный фреймворк для создания серверных приложений Node.js, основанный на TypeScript и вдохновленный архитектурными паттернами Angular.

Пример структуры приложения:

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
```

#### 2. Использование декораторов и Dependency Injection (DI)

- **Декораторы**:

  ```typescript
  import { Controller, Get } from '@nestjs/common';

  @Controller('cats')
  export class CatsController {
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
  }
  ```

- **Dependency Injection (DI)**:

  ```typescript
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class CatsService {
    findAll(): string {
      return 'This action returns all cats';
    }
  }

  @Controller('cats')
  export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): string {
      return this.catsService.findAll();
    }
  }
  ```

#### 3. Создание и использование модулей, сервисов, контроллеров и middleware

- **Модули**:

  ```typescript
  import { Module } from '@nestjs/common';
  import { CatsController } from './cats.controller';
  import { CatsService } from './cats.service';

  @Module({
    controllers: [CatsController],
    providers: [CatsService],
  })
  export class CatsModule {}
  ```

- **Сервисы**:

  ```typescript
  @Injectable()
  export class CatsService {
    findAll(): string {
      return 'This action returns all cats';
    }
  }
  ```

- **Контроллеры**:

  ```typescript
  @Controller('cats')
  export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(): string {
      return this.catsService.findAll();
    }
  }
  ```

- **Middleware**:

  ```typescript
  import { Injectable, NestMiddleware } from '@nestjs/common';
  import { Request, Response, NextFunction } from 'express';

  @Injectable()
  export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      console.log('Request...');
      next();
    }
  }

  import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

  @Module({
    controllers: [CatsController],
    providers: [CatsService],
  })
  export class CatsModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: 'cats', method: RequestMethod.GET });
    }
  }
  ```

#### 4. Guards, Interceptors и Pipes

- **Guards**:

  ```typescript
  import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
  import { Observable } from 'rxjs';

  @Injectable()
  export class AuthGuard implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      return validateRequest(request);
    }
  }

  function validateRequest(request: any): boolean {
    // Логика валидации
    return true;
  }
  ```

- **Interceptors**:

  ```typescript
  import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';

  @Injectable()
  export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(map(data => ({ data })));
    }
  }
  ```

- **Pipes**:

  ```typescript
  import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

  @Injectable()
  export class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
      const val = parseInt(value, 10);
      if (isNaN(val)) {
        throw new BadRequestException('Validation failed');
      }
      return val;
    }
  }
  ```

Эти примеры помогут вам начать работу с основными и продвинутыми функциями Node.js и NestJS.

### SOLID

**1. Single Responsibility Principle (SRP)**
Каждый класс должен иметь одну и только одну причину для изменения.
Пример:
```typescript
class UserService {
  getUserDetails(userId: string) {
    // Получение данных пользователя из базы данных
  }
}

class UserNotifier {
  sendNotification(userId: string, message: string) {
    // Отправка уведомления пользователю
  }
}
```
Здесь `UserService` отвечает за получение данных пользователя, а `UserNotifier` за отправку уведомлений. Каждый класс имеет одну ответственность.

**2. Open/Closed Principle (OCP)**
Классы должны быть открыты для расширения, но закрыты для модификации.
Пример:
```typescript
interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
  processPayment(amount: number) {
    // Обработка платежа кредитной картой
  }
}

class PaypalPayment implements PaymentMethod {
  processPayment(amount: number) {
    // Обработка платежа через PayPal
  }
}

class PaymentProcessor {
  constructor(private paymentMethod: PaymentMethod) {}

  process(amount: number) {
    this.paymentMethod.processPayment(amount);
  }
}
```
Для добавления нового способа оплаты нужно просто реализовать интерфейс `PaymentMethod`, не изменяя существующий код.

**3. Liskov Substitution Principle (LSP)**
Объекты подтипов должны заменять объекты базового типа без изменения правильности программы.
Пример:
```typescript
class Rectangle {
  constructor(public width: number, public height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }
}
```
Класс `Square` является подтипом `Rectangle`, и его использование не нарушает логику программы.

**4. Interface Segregation Principle (ISP)**
Клиенты не должны зависеть от интерфейсов, которые они не используют.
Пример:
```typescript
interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(): Document;
}

class AllInOnePrinter implements Printer, Scanner {
  print(document: Document) {
    // Печать документа
  }

  scan() {
    // Сканирование документа
  }
}

class SimplePrinter implements Printer {
  print(document: Document) {
    // Печать документа
  }
}
```
Классы реализуют только те интерфейсы, которые им необходимы.

**5. Dependency Inversion Principle (DIP)**
Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба должны зависеть от абстракций.
Пример:
```typescript
interface Database {
  save(data: any): void;
}

class MySQLDatabase implements Database {
  save(data: any) {
    // Сохранение данных в MySQL
  }
}

class UserService {
  constructor(private database: Database) {}

  saveUser(data: any) {
    this.database.save(data);
  }
}
```
Класс `UserService` зависит от абстракции `Database`, а не от конкретной реализации.

### KISS и DRY

**KISS (Keep It Simple, Stupid)**
Принцип заключается в том, чтобы системы оставались простыми и понятными.
Пример:
```typescript
// Плохо: сложный и запутанный код
function calculate(a: number, b: number, operation: string): number {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'subtract') {
    return a - b;
  } else if (operation === 'multiply') {
    return a * b;
  } else if (operation === 'divide') {
    return a / b;
  } else {
    throw new Error('Invalid operation');
  }
}

// Хорошо: простой и понятный код
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

function calculate(a: number, b: number, operation: Operation): number {
  return operation(a, b);
}
```

**DRY (Don't Repeat Yourself)**
Принцип заключается в избегании дублирования кода.
Пример:
```typescript
// Плохо: дублирование логики
function getUserById(id: string) {
  return database.query(`SELECT * FROM users WHERE id = ${id}`);
}

function getOrderById(id: string) {
  return database.query(`SELECT * FROM orders WHERE id = ${id}`);
}

// Хорошо: переиспользование логики
function getById(table: string, id: string) {
  return database.query(`SELECT * FROM ${table} WHERE id = ${id}`);
}

const user = getById('users', '123');
const order = getById('orders', '456');
```

### ООП

**Основные принципы:**
1. **Наследование (Inheritance)**:
    - Позволяет классу наследовать свойства и методы другого класса.
    - Пример:
      ```typescript
      class Animal {
        move() {
          console.log('Moving along!');
        }
      }

      class Dog extends Animal {
        bark() {
          console.log('Woof!');
        }
      }

      const dog = new Dog();
      dog.move(); // Moving along!
      dog.bark(); // Woof!
      ```

2. **Инкапсуляция (Encapsulation)**:
    - Скрытие внутренних деталей реализации класса.
    - Пример:
      ```typescript
      class Person {
        private ssn: string;
        public name: string;

        constructor(ssn: string, name: string) {
          this.ssn = ssn;
          this.name = name;
        }

        getSsn() {
          return this.ssn;
        }
      }

      const person = new Person('123-45-6789', 'John Doe');
      console.log(person.name); // John Doe
      console.log(person.getSsn()); // 123-45-6789
      ```

3. **Полиморфизм (Polymorphism)**:
    - Возможность использования объектов разных классов через один интерфейс.
    - Пример:
      ```typescript
      interface Shape {
        area(): number;
      }

      class Circle implements Shape {
        constructor(private radius: number) {}

        area() {
          return Math.PI * this.radius ** 2;
        }
      }

      class Rectangle implements Shape {
        constructor(private width: number, private height: number) {}

        area() {
          return this.width * this.height;
        }
      }

      const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

      shapes.forEach(shape => {
        console.log(shape.area());
      });
      ```

4. **Абстракция (Abstraction)**:
    - Выделение общего интерфейса для классов, скрывая детали реализации.
    - Пример:
      ```typescript
      abstract class Animal {
        abstract makeSound(): void;

        move() {
          console.log('Moving along!');
        }
      }

      class Dog extends Animal {
        makeSound() {
          console.log('Woof!');
        }
      }

      class Cat extends Animal {
        makeSound() {
          console.log('Meow!');
        }
      }

      const animals: Animal[] = [new Dog(), new Cat()];

      animals.forEach(animal => {
        animal.makeSound();
        animal.move();
      });
      ```

### Проектирование высоконагруженных систем

#### Балансировка нагрузки (Load Balancing)
Балансировка нагрузки распределяет входящий трафик между несколькими серверами для повышения производительности и надежности.
- **Round Robin**: Запросы распределяются равномерно по кругу между серверами.
- **Least Connections**: Запросы отправляются на сервер с наименьшим числом активных соединений.
- **IP Hash**: Запросы распределяются в зависимости от IP-адреса клиента.

Пример использования Nginx для балансировки нагрузки:
```nginx
http {
    upstream backend {
        server backend1.example.com;
        server backend2.example.com;
        server backend3.example.com;
    }

    server {
        listen 80;
        location / {
            proxy_pass http://backend;
        }
    }
}
```

#### Кэширование (Redis, CDN)
Кэширование помогает уменьшить нагрузку на базу данных и улучшить производительность, сохраняя часто запрашиваемые данные в быстром доступе.
- **Redis**: Используется для кэширования данных в памяти.
- **CDN (Content Delivery Network)**: Распространяет контент по серверам, расположенным близко к пользователям, уменьшая время загрузки и нагрузку на центральный сервер.

Пример использования Redis для кэширования:
```typescript
import * as redis from 'redis';
const client = redis.createClient();

client.set('key', 'value', 'EX', 3600); // Кэширование данных на 1 час

client.get('key', (err, value) => {
  if (err) throw err;
  console.log(value);
});
```

#### Оптимизация базы данных и запросов
Оптимизация базы данных включает в себя:
- **Индексы**: Создание индексов для часто запрашиваемых данных.
- **Нормализация**: Устранение избыточных данных.
- **Запросы**: Оптимизация SQL-запросов для повышения их производительности.

Пример создания индекса в PostgreSQL:
```sql
CREATE INDEX idx_users_email ON users(email);
```

#### Шардинг и репликация баз данных
- **Шардинг**: Разделение базы данных на несколько частей (шардов) для уменьшения нагрузки.
- **Репликация**: Создание копий базы данных для повышения доступности и отказоустойчивости.

Пример настройки репликации в PostgreSQL:
1. **Основной сервер (Master)**:
    ```sql
    CREATE ROLE replica WITH REPLICATION PASSWORD 'password' LOGIN;
    ```

2. **Реплика**:
    ```bash
    pg_basebackup -h master_host -D /var/lib/postgresql/12/main -U replica -P -R
    ```

### RPS > 10000: Тестирование и оптимизация

#### Тестирование для высокой пропускной способности
- **Нагрузочное тестирование**: Использование инструментов для симуляции большого числа запросов.
  - **Apache JMeter**: Инструмент для тестирования производительности.
  - **wrk**: HTTP-бенчмаркинг инструмент.

Пример использования wrk:
```bash
wrk -t12 -c400 -d30s http://example.com
```

#### Оптимизация для высокой пропускной способности
- **Асинхронное программирование**: Использование асинхронных операций для повышения производительности.
- **Сжатие данных**: Сжатие HTTP-ответов для уменьшения размера передаваемых данных.
- **Пул соединений**: Использование пула соединений для уменьшения задержек при установлении новых соединений.

#### Использование профайлеров и инструментов мониторинга
Профайлеры и инструменты мониторинга помогают выявить узкие места в системе.
- **Prometheus**: Система мониторинга и оповещений.
- **Grafana**: Платформа для визуализации данных.
- **New Relic, Datadog**: Инструменты для мониторинга производительности приложений.

Пример настройки Prometheus и Grafana:
1. **Prometheus**: Настройка конфигурации `prometheus.yml`.
    ```yaml
    global:
      scrape_interval: 15s

    scrape_configs:
      - job_name: 'node'
        static_configs:
          - targets: ['localhost:9090']
    ```

2. **Grafana**: Подключение к Prometheus как источник данных и создание дашбордов для визуализации метрик.

Эти шаги и инструменты помогут вам эффективно проектировать, тестировать и оптимизировать высоконагруженные системы, обеспечивая их надежность и производительность при RPS > 10000.

### Микросервисная архитектура

#### Основы микросервисов

**Преимущества микросервисной архитектуры:**
1. **Масштабируемость**: Возможность масштабирования отдельных сервисов независимо друг от друга.
2. **Гибкость разработки**: Различные команды могут работать над разными сервисами с использованием различных технологий и языков программирования.
3. **Устойчивость к ошибкам**: Ошибка в одном микросервисе не приводит к падению всей системы.
4. **Обратная совместимость**: Легче обновлять и развёртывать отдельные сервисы без остановки всей системы.
5. **Повышенная продуктивность**: Команды могут работать параллельно, ускоряя процесс разработки.

**Недостатки микросервисной архитектуры:**
1. **Сложность**: Управление большим числом сервисов усложняет архитектуру.
2. **Коммуникация**: Взаимодействие между сервисами требует надежных механизмов коммуникации.
3. **Трудности с согласованностью данных**: Обеспечение целостности данных может быть сложным.
4. **Мониторинг и логирование**: Необходимы продвинутые инструменты для отслеживания и логирования работы системы.

#### Коммуникация между микросервисами

**REST (Representational State Transfer)**:
- Простой и широко используемый способ коммуникации через HTTP.
- Использование стандартных методов HTTP (GET, POST, PUT, DELETE).

Пример REST-запроса:
```typescript
import axios from 'axios';

axios.get('http://user-service/users/1')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

**gRPC (gRPC Remote Procedure Call)**:
- Высокопроизводительная RPC (Remote Procedure Call) система, работающая поверх HTTP/2.
- Использование Protocol Buffers для сериализации данных.

Пример gRPC-запроса:
```typescript
import * as grpc from 'grpc';
import { UserServiceClient } from './generated/user_grpc_pb';
import { GetUserRequest } from './generated/user_pb';

const client = new UserServiceClient('localhost:50051', grpc.credentials.createInsecure());
const request = new GetUserRequest();
request.setId(1);

client.getUser(request, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response.toObject());
  }
});
```

**Message Brokers (RabbitMQ, Kafka)**:
- Использование брокеров сообщений для асинхронной коммуникации между сервисами.
- Повышенная надёжность и возможность обработки больших объёмов данных.

Пример использования RabbitMQ:
```typescript
import * as amqp from 'amqplib';

async function sendMessage(queue: string, message: string) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(message));
  await channel.close();
  await connection.close();
}

sendMessage('task_queue', 'Hello World');
```

#### Практическое применение

**Дизайн и развёртывание микросервисов:**
1. **Декомпозиция системы**: Разделение системы на микросервисы, каждый из которых отвечает за определённый функционал.
2. **Выбор технологий**: Подбор подходящих технологий и инструментов для каждого сервиса.
3. **Контейнеризация**: Использование Docker для упаковки микросервисов в контейнеры.
4. **Оркестрация**: Использование Kubernetes для управления контейнерами и их оркестрации.

Пример Dockerfile для микросервиса:
```dockerfile
# Используем базовый образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Запуск приложения
CMD ["npm", "start"]
```

**Управление состоянием и согласованностью данных:**
1. **Событийная согласованность**: Использование событий для синхронизации состояния между микросервисами.
2. **Саги**: Использование паттерна саг для управления распределёнными транзакциями и обеспечения согласованности.
3. **CQRS (Command Query Responsibility Segregation)**: Разделение команд и запросов для оптимизации работы с данными.

Пример событийной согласованности:
```typescript
// Отправка события при создании пользователя
import * as amqp from 'amqplib';

async function createUser(user) {
  // Логика создания пользователя
  await saveUserToDatabase(user);

  // Отправка события
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertExchange('user_events', 'fanout');
  channel.publish('user_events', '', Buffer.from(JSON.stringify({ type: 'USER_CREATED', user })));
  await channel.close();
  await connection.close();
}
```

### Примеры запросов на чистом SQL и TypeORM

#### Чистый SQL

1. **Создание таблиц**

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) UNIQUE NOT NULL
   );

   CREATE TABLE orders (
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id),
       order_date DATE NOT NULL,
       total NUMERIC NOT NULL
   );
   ```

2. **Вставка данных**

   ```sql
   INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
   INSERT INTO orders (user_id, order_date, total) VALUES (1, '2024-06-18', 100.50);
   ```

3. **Простое SELECT**

   ```sql
   SELECT * FROM users;
   ```

4. **JOIN запрос**

   ```sql
   SELECT users.name, orders.order_date, orders.total
   FROM users
   JOIN orders ON users.id = orders.user_id;
   ```

5. **WHERE условие**

   ```sql
   SELECT * FROM users WHERE email = 'john@example.com';
   ```

6. **GROUP BY и HAVING**

   ```sql
   SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
   FROM orders
   GROUP BY user_id
   HAVING SUM(total) > 100;
   ```

7. **ORDER BY и LIMIT**

   ```sql
   SELECT * FROM orders
   ORDER BY order_date DESC
   LIMIT 5;
   ```

#### TypeORM

1. **Создание сущностей**

   ```typescript
   import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column({ unique: true })
     email: string;
   }

   @Entity()
   export class Order {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     order_date: Date;

     @Column('decimal')
     total: number;

     @ManyToOne(() => User)
     @JoinColumn({ name: 'user_id' })
     user: User;
   }
   ```

2. **Вставка данных**

   ```typescript
   import { getRepository } from 'typeorm';
   import { User } from './entities/User';
   import { Order } from './entities/Order';

   const userRepository = getRepository(User);
   const orderRepository = getRepository(Order);

   const user = new User();
   user.name = 'John Doe';
   user.email = 'john@example.com';
   await userRepository.save(user);

   const order = new Order();
   order.order_date = new Date();
   order.total = 100.50;
   order.user = user;
   await orderRepository.save(order);
   ```

3. **Простое SELECT**

   ```typescript
   const users = await userRepository.find();
   console.log(users);
   ```

4. **JOIN запрос**

   ```typescript
   const orders = await orderRepository
     .createQueryBuilder('order')
     .innerJoinAndSelect('order.user', 'user')
     .select(['user.name', 'order.order_date', 'order.total'])
     .getMany();

   console.log(orders);
   ```

5. **WHERE условие**

   ```typescript
   const user = await userRepository.findOne({ where: { email: 'john@example.com' } });
   console.log(user);
   ```

6. **GROUP BY и HAVING**

   ```typescript
   const query = orderRepository
     .createQueryBuilder('order')
     .select('order.user_id')
     .addSelect('COUNT(order.id)', 'order_count')
     .addSelect('SUM(order.total)', 'total_spent')
     .groupBy('order.user_id')
     .having('SUM(order.total) > :minTotal', { minTotal: 100 });

   const result = await query.getRawMany();
   console.log(result);
   ```

7. **ORDER BY и LIMIT**

   ```typescript
   const latestOrders = await orderRepository
     .createQueryBuilder('order')
     .orderBy('order.order_date', 'DESC')
     .limit(5)
     .getMany();

   console.log(latestOrders);
   ```



В реляционных базах данных существует несколько типов JOIN для объединения данных из нескольких таблиц. Вот основные типы JOIN и их определения:

### Типы JOIN

1. **INNER JOIN**
   
   Объединяет строки из двух таблиц, когда существует совпадение в обоих таблицах. Если строка в одной из таблиц не имеет соответствующего совпадения в другой таблице, она не будет включена в результат.

   ```sql
   SELECT orders.id, users.name, orders.total
   FROM orders
   INNER JOIN users ON orders.user_id = users.id;
   ```

2. **LEFT (OUTER) JOIN**
   
   Возвращает все строки из левой таблицы и совпадающие строки из правой таблицы. Если совпадения нет, то возвращаются NULL для колонок из правой таблицы.

   ```sql
   SELECT orders.id, users.name, orders.total
   FROM orders
   LEFT JOIN users ON orders.user_id = users.id;
   ```

3. **RIGHT (OUTER) JOIN**
   
   Возвращает все строки из правой таблицы и совпадающие строки из левой таблицы. Если совпадения нет, то возвращаются NULL для колонок из левой таблицы.

   ```sql
   SELECT orders.id, users.name, orders.total
   FROM orders
   RIGHT JOIN users ON orders.user_id = users.id;
   ```

4. **FULL (OUTER) JOIN**
   
   Возвращает все строки, когда есть совпадение в одной из таблиц. Если строки не совпадают, то возвращаются NULL для соответствующих колонок другой таблицы.

   ```sql
   SELECT orders.id, users.name, orders.total
   FROM orders
   FULL OUTER JOIN users ON orders.user_id = users.id;
   ```

5. **CROSS JOIN**
   
   Возвращает декартово произведение двух таблиц, то есть каждая строка из первой таблицы объединяется с каждой строкой из второй таблицы.

   ```sql
   SELECT users.name, orders.total
   FROM users
   CROSS JOIN orders;
   ```

6. **SELF JOIN**
   
   Это когда таблица соединяется сама с собой. Используется для сопоставления строк одной таблицы между собой.

   ```sql
   SELECT a.id AS OrderA, b.id AS OrderB
   FROM orders a, orders b
   WHERE a.user_id = b.user_id AND a.id < b.id;
   ```

### Примеры JOIN в TypeORM

1. **INNER JOIN**

   ```typescript
   const orders = await orderRepository
     .createQueryBuilder('order')
     .innerJoinAndSelect('order.user', 'user')
     .getMany();
   ```

2. **LEFT JOIN**

   ```typescript
   const orders = await orderRepository
     .createQueryBuilder('order')
     .leftJoinAndSelect('order.user', 'user')
     .getMany();
   ```

3. **RIGHT JOIN**

   ```typescript
   const orders = await orderRepository
     .createQueryBuilder('order')
     .rightJoinAndSelect('order.user', 'user')
     .getMany();
   ```

4. **FULL OUTER JOIN**

   TypeORM не поддерживает FULL OUTER JOIN напрямую. Вместо этого можно использовать чистый SQL:

   ```typescript
   const query = `
     SELECT orders.id, users.name, orders.total
     FROM orders
     FULL OUTER JOIN users ON orders.user_id = users.id
   `;
   const result = await getConnection().query(query);
   ```

5. **CROSS JOIN**

   ```typescript
   const result = await getConnection()
     .createQueryBuilder()
     .select('users.name, orders.total')
     .from(User, 'users')
     .crossJoin(Order, 'orders')
     .getRawMany();
   ```

6. **SELF JOIN**

   ```typescript
   const orders = await orderRepository
     .createQueryBuilder('a')
     .innerJoin('orders', 'b', 'a.user_id = b.user_id AND a.id < b.id')
     .select(['a.id AS OrderA', 'b.id AS OrderB'])
     .getRawMany();
   ```

Эти примеры демонстрируют, как использовать различные типы JOIN для объединения данных из нескольких таблиц как на чистом SQL, так и с использованием TypeORM.