### Общие вопросы
<details>
<summary>1. Что такое NestJS и в чем его основные преимущества?</summary>
NestJS - это прогрессивный фреймворк для создания серверных приложений на Node.js, основанный на TypeScript. Он использует модульную архитектуру и вдохновлен архитектурными стилями Angular.

#### Преимущества:
- **Модульная структура**: позволяет легко организовывать и поддерживать большие приложения.
- **Инъекция зависимостей**: упрощает управление зависимостями между компонентами.
- **Поддержка TypeScript**: предоставляет типизацию и улучшает качество кода.
- **Поддержка различных транспортных слоев**: HTTP, WebSockets, Microservices.
- **Встроенная поддержка тестирования**: включает утилиты для юнит-тестирования и энд-то-энд тестирования.
</details>

<details>
<summary>2. Какие основные компоненты в NestJS?</summary>
Основные компоненты в NestJS включают:
- **Модули (Modules)**: основной строительный блок приложения, который группирует компоненты.
- **Контроллеры (Controllers)**: обрабатывают входящие HTTP-запросы и возвращают ответы клиенту.
- **Сервисы (Services)**: содержат бизнес-логику и обрабатывают данные.
- **Провайдеры (Providers)**: управляют зависимостями и обеспечивают инъекцию зависимостей.
- **Мидлваре (Middleware)**: обрабатывают запросы перед тем, как они достигают контроллера.
- **Гварды (Guards)**: выполняют проверку аутентификации и авторизации.
- **Интерсепторы (Interceptors)**: изменяют или расширяют поведение запросов и ответов.
- **Фильтры (Filters)**: обрабатывают исключения и ошибки.
</details>

<details>
<summary>3. Чем отличается NestJS от других фреймворков Node.js?</summary>
NestJS отличается от других фреймворков Node.js следующими особенностями:
- **Модульная архитектура**: позволяет легко организовывать и масштабировать приложение.
- **Инъекция зависимостей**: встроенная поддержка инъекции зависимостей облегчает управление зависимостями.
- **Использование TypeScript**: улучшает качество кода и предоставляет мощные инструменты разработки.
- **Вдохновлен Angular**: схожая структура и принципы упрощают переход для разработчиков Angular.
- **Поддержка микросервисов**: позволяет создавать масштабируемые распределенные системы.
</details>

<details>
<summary>4. Как установить NestJS?</summary>
Для установки NestJS необходимо выполнить следующие шаги:

#### Команды для установки:
```bash
npm install -g @nestjs/cli
nest new project-name
```
- `npm install -g @nestjs/cli`: устанавливает глобально CLI NestJS.
- `nest new project-name`: создает новый проект с шаблоном NestJS.
</details>

<details>
<summary>5. Что такое модуль в NestJS?</summary>
Модуль в NestJS - это класс, который организует связанные компоненты, такие как контроллеры и сервисы, в одну единицу.

#### Пример модуля:
```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

#### Преимущества:
- **Организация кода**: улучшает структурированность приложения.
- **Повторное использование**: модули могут быть импортированы в другие модули.
- **Масштабируемость**: упрощает добавление новых функциональностей.
</details>

<details>
<summary>6. Что такое контроллер в NestJS?</summary>
Контроллер в NestJS - это класс, который обрабатывает входящие HTTP-запросы и возвращает ответы клиенту.

#### Пример контроллера:
```typescript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
```

#### Функции контроллера:
- **Обработка запросов**: маршрутизация и обработка HTTP-запросов.
- **Взаимодействие с сервисами**: получение данных и вызов бизнес-логики.
- **Возврат ответов**: отправка ответов клиенту.
</details>

<details>
<summary>7. Что такое сервис в NestJS?</summary>
Сервис в NestJS - это класс, который содержит бизнес-логику и отвечает за обработку данных.

#### Пример сервиса:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [];

  findAll() {
    return this.users;
  }

  create(user) {
    this.users.push(user);
  }
}
```

#### Преимущества:
- **Логика приложения**: содержит основную логику и операции с данными.
- **Повторное использование**: может быть использован в различных контроллерах и модулях.
- **Тестируемость**: легко тестировать изолированно от других компонентов.
</details>

<details>
<summary>8. Как создать и использовать провайдеры в NestJS?</summary>
Провайдеры в NestJS - это классы, которые могут быть внедрены в другие классы с помощью инъекции зависимостей.

#### Пример создания провайдера:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // логика сервиса
}
```

#### Использование провайдера:
```typescript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```

#### Преимущества:
- **Инъекция зависимостей**: упрощает управление зависимостями.
- **Повторное использование**: провайдеры могут быть использованы в разных модулях.
- **Тестируемость**: облегчает тестирование отдельных компонентов.
</details>

<details>
<summary>9. Что такое инъекция зависимостей в NestJS?</summary>
Инъекция зависимостей (Dependency Injection) в NestJS - это паттерн проектирования, который позволяет управлять зависимостями между объектами.

#### Пример инъекции зависимостей:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // логика сервиса
}

import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
```

#### Преимущества:
- **Упрощение кода**: уменьшает жесткую связанность между компонентами.
- **Повышение тестируемости**: позволяет легко подменять зависимости при тестировании.
- **Гибкость**: упрощает управление зависимостями и их конфигурацию.
</details>

<details>
<summary>10. Какие аннотации используются для инъекции зависимостей?</summary>
В NestJS используются следующие аннотации для инъекции зависимостей:
- `@Injectable()`: маркирует класс как провайдер, который может быть инъектирован.
- `@Inject()`: позволяет явно указать, какую зависимость необходимо инъектировать.
- `@Optional()`: позволяет сделать зависимость необязательной.
- `@Global()`: делает провайдер глобально доступным во всех модулях.

#### Пример использования:
```typescript
import { Injectable, Inject, Optional } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @Inject('ConfigService') private configService,
    @Optional() private optionalService?
  ) {}
}
```
</details>

### Модули и Архитектура

<details>
<summary>11. Как структурировать приложение на модули в NestJS?</summary>
Приложение NestJS структурируется на модули для лучшей организации кода и управления зависимостями. Модули группируют связанные компоненты, такие как контроллеры, провайдеры и другие модули.

#### Пример структуры приложения:
```
src/
├── app.module.ts
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts
│   └── users.service.ts
└── products/
    ├── products.module.ts
    ├── products.controller.ts
    └── products.service.ts
```

#### Пример модуля:
```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```
</details>

<details>
<summary>12. Что такое глобальные модули?</summary>
Глобальные модули в NestJS - это модули, которые делают свои провайдеры доступными во всем приложении без необходимости явного импорта в каждый модуль.

#### Пример глобального модуля:
```typescript
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
```

#### Использование:
```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
})
export class AppModule {}
```
Провайдер `ConfigService` будет доступен во всех модулях.
</details>

<details>
<summary>13. Как настроить модульные зависимости?</summary>
Модульные зависимости настраиваются путем использования свойства `imports` в декораторе `@Module`. Импортируемые модули делятся своими провайдерами с текущим модулем.

#### Пример настройки зависимости:
```typescript
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
})
export class AppModule {}
```
</details>

<details>
<summary>14. Как импортировать и экспортировать модули?</summary>
Импортирование и экспортирование модулей осуществляется с помощью свойств `imports` и `exports` в декораторе `@Module`.

#### Пример импортирования и экспортирования модуля:
```typescript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```
Модуль `UsersModule` экспортирует `UsersService`, который теперь доступен в `AppModule`.
</details>

<details>
<summary>15. Что такое динамические модули?</summary>
Динамические модули в NestJS позволяют конфигурировать модули на основе входных параметров или условий. Это полезно для создания конфигураций или настроек в зависимости от окружения.

#### Пример динамического модуля:
```typescript
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.forRoot({ folder: './config' })],
})
export class AppModule {}
```
</details>

### Контроллеры

<details>
<summary>16. Как создавать и использовать контроллеры?</summary>
Контроллеры создаются с использованием декоратора `@Controller` и аннотаций для маршрутизации HTTP-запросов.

#### Пример создания контроллера:
```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```
Контроллер `UsersController` обрабатывает GET и POST запросы к маршруту `/users`.
</details>

<details>
<summary>17. Что такое декораторы в NestJS и как их использовать?</summary>
Декораторы в NestJS - это специальные аннотации, которые добавляют метаданные к классам, методам или свойствам. Они используются для определения маршрутов, инъекций зависимостей и других аспектов.

#### Пример декоратора:
```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'This action returns all items';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns item #${id}`;
  }

  @Post()
  create(@Body() createItemDto) {
    return 'This action adds a new item';
  }
}
```
Декораторы `@Get`, `@Post`, `@Body`, `@Param` используются для маршрутизации и обработки данных.
</details>

<details>
<summary>18. Как обрабатывать запросы и ответы в контроллерах?</summary>
Контроллеры в NestJS обрабатывают запросы с помощью методов, помеченных соответствующими декораторами HTTP-методов (`@Get`, `@Post`, `@Put`, `@Delete` и т.д.). Они возвращают ответы клиенту.

#### Пример обработки запросов и ответов:
```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```
Методы контроллера обрабатывают запросы и возвращают соответствующие ответы.
</details>

<details>
<summary>19. Какие HTTP-методы поддерживает NestJS?</summary>
NestJS поддерживает следующие HTTP-методы:
- `@Get()`: для обработки GET-запросов.
- `@Post()`: для обработки POST-запросов.
- `@Put()`: для обработки PUT-запросов.
- `@Delete()`: для обработки DELETE-запросов.
- `@Patch()`: для обработки PATCH-запросов.
- `@Options()`: для обработки OPTIONS-запросов.
- `@Head()`: для обработки HEAD-запросов.

#### Пример:
```typescript
import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';

@Controller('examples')
export class ExampleController {
  @Get()
  getExample() {
    return 'GET request';
  }

  @Post()
  postExample() {
    return 'POST request';
  }

  @Put()
  putExample() {
    return 'PUT request';
  }

  @Delete()
  deleteExample() {
    return 'DELETE request';
  }

  @Patch()
  patchExample() {
    return 'PATCH request';
  }
}
```
</details>

<details>
<summary>20. Как использовать маршрутизацию в NestJS?</summary>
Маршрутизация в NestJS осуществляется с помощью декоратора `@Controller`, который определяет базовый маршрут, и декораторов методов (`@Get`, `@Post`, и т.д.), которые определяют маршруты для конкретных методов.

#### Пример маршрутизации:
```typescript
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns user #${id}`;
  }
}
```
Контроллер `UsersController` имеет базовый маршрут `/users` и маршруты для GET-запросов, которые возвращают всех пользователей и пользователя по ID.
</details>

### Сервисы

<details>
<summary>21. Как создавать и использовать сервисы?</summary>
Сервисы в NestJS создаются с помощью декоратора `@Injectable()` и содержат бизнес-логику приложения.

#### Пример создания сервиса:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  create(user) {
    this.users.push(user);
    return user;
  }
}
```

#### Пример использования сервиса в контроллере:
```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user) {
    return this.usersService.create(user);
  }
}
```
</details>

<details>
<summary>22. Как передавать данные между контроллерами и сервисами?</summary>
Данные передаются между контроллерами и сервисами через методы контроллеров, которые вызывают соответствующие методы сервисов.

#### Пример передачи данных:
```typescript
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

#### Пример метода в сервисе:
```typescript
@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  create(user) {
    this.users.push(user);
    return user;
  }
}
```
</details>

<details>
<summary>23. Как тестировать сервисы?</summary>
Тестирование сервисов в NestJS осуществляется с использованием встроенных тестовых утилит и фреймворка Jest.

#### Пример юнит-теста для сервиса:
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user = { id: '1', name: 'John' };
    expect(service.create(user)).toEqual(user);
  });

  it('should return all users', () => {
    const users = [{ id: '1', name: 'John' }];
    service.create(users[0]);
    expect(service.findAll()).toEqual(users);
  });
});
```
</details>

<details>
<summary>24. Что такое singleton в контексте сервисов?</summary>
Singleton в контексте сервисов - это экземпляр сервиса, который создается один раз и используется во всем приложении. Это означает, что каждый раз, когда сервис инъектируется, используется один и тот же экземпляр.

#### Пример Singleton сервиса:
```typescript
@Injectable()
export class UsersService {
  // Этот сервис будет Singleton по умолчанию
}
```
Singleton-ы позволяют сохранять состояние и данные в сервисах, которые могут быть доступны в разных частях приложения.
</details>

### Провайдеры

<details>
<summary>25. Что такое провайдер в NestJS?</summary>
Провайдер в NestJS - это класс, который может быть внедрен в другие классы с помощью инъекции зависимостей. Провайдеры обычно содержат логику приложения и могут быть сервисами, репозиториями или любыми другими объектами, которые нужно внедрить.

#### Пример провайдера:
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  create(user) {
    this.users.push(user);
    return user;
  }
}
```
</details>

<details>
<summary>26. Как создать кастомный провайдер?</summary>
Кастомный провайдер создается с помощью конфигурации объекта провайдера, который передается в декоратор `@Module`.

#### Пример кастомного провайдера:
```typescript
import { Module, Provider } from '@nestjs/common';
import { UsersService } from './users.service';

const customProvider: Provider = {
  provide: 'CUSTOM_USERS_SERVICE',
  useClass: UsersService,
};

@Module({
  providers: [customProvider],
  exports: [customProvider],
})
export class UsersModule {}
```
Использование кастомного провайдера:
```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('CUSTOM_USERS_SERVICE') private usersService: UsersService) {}
}
```
</details>

<details>
<summary>27. Что такое фабричный провайдер?</summary>
Фабричный провайдер использует функцию для создания объекта, который будет предоставлен в качестве зависимости.

#### Пример фабричного провайдера:
```typescript
import { Module, Provider } from '@nestjs/common';
import { UsersService } from './users.service';

const factoryProvider: Provider = {
  provide: 'USERS_SERVICE',
  useFactory: () => {
    const usersService = new UsersService();
    // Дополнительная настройка
    return usersService;
  },
};

@Module({
  providers: [factoryProvider],
  exports: [factoryProvider],
})
export class UsersModule {}
```
Использование фабричного провайдера:
```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('USERS_SERVICE') private usersService: UsersService) {}
}
```
</details>

<details>
<summary>28. Что такое value-провайдер?</summary>
Value-провайдер предоставляет конкретное значение в качестве зависимости. Это может быть полезно для предоставления конфигурационных данных или констант.

#### Пример value-провайдера:
```typescript
import { Module, Provider } from '@nestjs/common';

const valueProvider: Provider = {
  provide: 'API_KEY',
  useValue: '12345-abcde',
};

@Module({
  providers: [valueProvider],
  exports: [valueProvider],
})
export class ConfigModule {}
```
Использование value-провайдера:
```typescript
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apiKey: string) {
    console.log(this.apiKey); // '12345-abcde'
  }
}
```
</details>

### Middleware и Гварды

<details>
<summary>29. Что такое middleware в NestJS и как его использовать?</summary>
Middleware в NestJS - это функции, которые обрабатывают запросы перед тем, как они достигнут контроллеров. Middleware может использоваться для логирования, аутентификации, обработки CORS и других задач.

#### Пример создания и использования middleware:
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request...`);
    next();
  }
}

import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```
Middleware будет применяться ко всем маршрутам.
</details>

<details>
<summary>30. Как создавать и применять middleware?</summary>
Middleware создается как класс, реализующий интерфейс `NestMiddleware`, и применяется с помощью метода `apply` в модуле.

#### Пример создания middleware:
```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Логика аутентификации
    next();
  }
}
```

#### Пример применения middleware:
```typescript
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
  }
}
```
Middleware будет применяться ко всем маршрутам, начинающимся с `/users`.
</details>

<details>
<summary>31. Что такое гварды (guards) и для чего они нужны?</summary>
Гварды (guards) в NestJS используются для выполнения проверки перед тем, как запрос достигнет контроллера. Они могут использоваться для проверки аутенти

фикации и авторизации.

#### Пример создания гварда:
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Логика проверки аутентификации
    return true; // или false
  }
}
```

#### Пример использования гварда:
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return 'This route is protected';
  }
}
```
Гвард будет проверять каждый запрос к маршруту `GET /users`.
</details>

<details>
<summary>32. Как создать и использовать гвард?</summary>
Гвард создается с использованием интерфейса `CanActivate` и метода `canActivate`, который определяет, может ли запрос продолжить выполнение.

#### Пример создания гварда:
```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // Логика проверки роли пользователя
    return user && user.role === 'admin';
  }
}
```

#### Пример использования гварда:
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';

@Controller('admin')
export class AdminController {
  @Get()
  @UseGuards(RolesGuard)
  getAdminData() {
    return 'This route is protected by RolesGuard';
  }
}
```
Гвард будет проверять каждый запрос к маршруту `GET /admin`, чтобы убедиться, что у пользователя есть роль `admin`.
</details>

### Интерсепторы и Фильтры

<details>
<summary>33. Что такое интерсептор (interceptor)?</summary>
Интерсептор (interceptor) в NestJS - это класс, который может перехватывать и изменять данные запросов и ответов. Интерсепторы могут использоваться для логирования, кэширования, трансформации данных и других задач.

#### Пример интерсептора:
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
</details>

<details>
<summary>34. Как создать и использовать интерсепторы?</summary>
Интерсепторы создаются с использованием интерфейса `NestInterceptor` и метода `intercept`, который позволяет перехватывать и изменять данные запросов и ответов.

#### Пример создания интерсептора:
```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        map(data => {
          console.log(`After... ${Date.now() - now}ms`);
          return data;
        }),
      );
  }
}
```

#### Пример использования интерсептора:
```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UsersController {
  @Get()
  findAll() {
    return 'This action returns all users';
  }
}
```
Интерсептор будет применяться ко всем маршрутам контроллера `UsersController`.
</details>

<details>
<summary>35. Что такое фильтры (filters) и как они работают?</summary>
Фильтры (filters) в NestJS используются для обработки и управления исключениями. Они позволяют централизованно обрабатывать ошибки и возвращать клиенту структурированные ответы.

#### Пример создания фильтра:
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
```

#### Пример использования фильтра:
```typescript
import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  @Get()
  findAll() {
    throw new HttpException('Forbidden', 403);
  }
}
```
Фильтр будет применяться ко всем маршрутам контроллера `UsersController`.
</details>

<details>
<summary>36. Как обрабатывать ошибки с помощью фильтров?</summary>
Ошибки обрабатываются с помощью фильтров, которые перехватывают исключения, возникающие в приложении, и возвращают клиенту структурированные ответы.

#### Пример обработки ошибок с использованием фильтра:
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message,
      });
  }
}
```

#### Применение фильтра глобально:
```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
```
Фильтр будет применяться ко всем маршрутам в приложении.
</details>

### Pipes

<details>
<summary>37. Что такое pipes в NestJS?</summary>
Pipes в NestJS - это классы, которые используются для преобразования и валидации данных. Они могут применять логику к данным до того, как они будут обработаны маршрутом.

#### Пример использования встроенного pipe:
```typescript
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns a user with ID #${id}`;
  }
}
```
В этом примере `ParseIntPipe` преобразует параметр `id` в число.
</details>

<details>
<summary>38. Как использовать встроенные pipes?</summary>
Встроенные pipes, такие как `ValidationPipe` и `ParseIntPipe`, могут использоваться для валидации и преобразования данных.

#### Пример использования `ValidationPipe`:
```typescript
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
```
`ValidationPipe` проверяет данные на соответствие DTO перед их обработкой.
</details>

<details>
<summary>39. Как создать кастомный pipe?</summary>
Кастомный pipe создается с использованием интерфейса `PipeTransform` и метода `transform`, который определяет логику преобразования или валидации данных.

#### Пример кастомного pipe:
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

#### Пример использования кастомного pipe:
```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns a user with ID #${id}`;
  }
}
```
</details>

<details>
<summary>40. Как использовать валидационные pipes?</summary>
Валидационные pipes проверяют данные на соответствие определенным условиям перед их обработкой. В NestJS часто используется `ValidationPipe` вместе с классовыми валидационными библиотеками, такими как `class-validator`.

#### Пример использования `ValidationPipe`:
```typescript
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
```
`ValidationPipe` проверяет данные на соответствие DTO `CreateUserDto` перед их обработкой.
</details>

### Валидация и Трансформация

<details>
<summary>41. Как валидировать данные в NestJS?</summary>
Валидация данных в NestJS обычно осуществляется с использованием DTO (Data Transfer Objects) и библиотеки `class-validator` вместе с `ValidationPipe`.

#### Пример DTO с валидацией:
```typescript
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  age: number;
}
```

#### Пример использования валидации:
```typescript
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
```
В этом примере `ValidationPipe` проверяет данные на соответствие правилам, заданным в `CreateUserDto`.
</details>

<details>


<summary>42. Какие библиотеки для валидации данных можно использовать?</summary>
Наиболее популярные библиотеки для валидации данных в NestJS:
- `class-validator`: позволяет определять правила валидации с помощью декораторов.
- `joi`: мощная библиотека для валидации схем данных.

#### Пример использования `class-validator`:
```typescript
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  age: number;
}
```

#### Пример использования `joi`:
```typescript
import * as Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).max(100).required(),
});
```
</details>

<details>
<summary>43. Как трансформировать данные в NestJS?</summary>
Трансформация данных в NestJS может осуществляться с использованием pipes или интерсепторов для изменения данных до или после обработки маршрутом.

#### Пример трансформации данных с использованием pipe:
```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ToUpperCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return typeof value === 'string' ? value.toUpperCase() : value;
  }
}

import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ToUpperCasePipe()) createUserDto) {
    return `This action adds a new user with name ${createUserDto.name}`;
  }
}
```
В этом примере `ToUpperCasePipe` преобразует все строки в верхний регистр перед их обработкой маршрутом.
</details>


### Базы данных

<details>
<summary>44. Как подключиться к базе данных в NestJS?</summary>
Для подключения к базе данных в NestJS обычно используются ORM или библиотеки для работы с базами данных. Подключение осуществляется через модули, такие как `TypeOrmModule` или `MongooseModule`.

#### Пример подключения к базе данных с использованием TypeORM:
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```
В этом примере приложение подключается к MySQL базе данных.
</details>

<details>
<summary>45. Какие ORM поддерживаются в NestJS?</summary>
В NestJS поддерживаются несколько ORM, в том числе:
- **TypeORM**: для работы с SQL базами данных (MySQL, PostgreSQL, SQLite, и т.д.).
- **Sequelize**: также для работы с SQL базами данных.
- **Mongoose**: для работы с NoSQL базами данных (MongoDB).

#### Пример использования TypeORM:
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

#### Пример использования Mongoose:
```typescript
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```
</details>

<details>
<summary>46. Как работать с TypeORM?</summary>
TypeORM - это ORM для работы с SQL базами данных. В NestJS используется модуль `TypeOrmModule` для интеграции TypeORM.

#### Пример работы с TypeORM:
```typescript
// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}

// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
```
</details>

<details>
<summary>47. Как использовать Mongoose с NestJS?</summary>
Mongoose - это библиотека для работы с MongoDB в Node.js. В NestJS используется модуль `MongooseModule` для интеграции Mongoose.

#### Пример использования Mongoose:
```typescript
// user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  age: Number,
});

// users.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndRemove(id).exec();
  }
}
```
</details>

<details>
<summary>48. Как реализовать репозитории в NestJS?</summary>
Репозитории в NestJS реализуются с использованием ORM, таких как TypeORM или Mongoose, и предоставляют методы для работы с данными.

#### Пример репозитория с использованием TypeORM:
```typescript
// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
```

#### Пример репозитория с использованием Mongoose:
```typescript
// user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  age: Number,
});

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndRemove(id).exec();
  }
}
```
</details>

### Аутентификация и Авторизация

<details>
<summary>49. Как реализовать аутентификацию в NestJS?</summary>
Аутентификация в NestJS реализуется с использованием библиотеки `Passport.js`, которая предоставляет различные стратегии аутентификации. Часто используется JWT (JSON Web Token) для аутентификации.

#### Пример реализации аутентификации с использованием JWT:
```typescript
// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return

 {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```
</details>

<details>
<summary>50. Какие стратегии аутентификации поддерживаются?</summary>
NestJS поддерживает различные стратегии аутентификации через библиотеку `Passport.js`. Вот некоторые из них:
- **Local Strategy**: для локальной аутентификации с использованием имени пользователя и пароля.
- **JWT Strategy**: для аутентификации с использованием JSON Web Token.
- **OAuth2 Strategy**: для аутентификации через сторонние провайдеры, такие как Google, Facebook, и т.д.
- **API Key Strategy**: для аутентификации с использованием API ключей.

#### Пример использования Local Strategy:
```typescript
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```
</details>

<details>
<summary>51. Как использовать Passport.js с NestJS?</summary>
Passport.js интегрируется с NestJS через модуль `PassportModule` и стратегии аутентификации.

#### Пример использования Passport.js с JWT:
```typescript
// jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
```
</details>

<details>
<summary>52. Как реализовать JWT аутентификацию?</summary>
JWT аутентификация реализуется с использованием модулей `JwtModule` и `PassportModule`, а также соответствующей стратегии.

#### Пример реализации JWT аутентификации:
```typescript
// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

// jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

// auth.controller.ts
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
})
export class AppModule {}
```
</details>

<details>
<summary>53. Что такое роли и как их использовать для авторизации?</summary>
Роли используются для определения прав доступа пользователей к различным частям приложения. В NestJS роли могут быть реализованы с использованием гвардов (guards).

#### Пример реализации ролей:
```typescript
// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.some(role => user.roles?.includes(role));
  }
}

// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// auth.module.ts
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}

// users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  @Get()
  @Roles('admin')
  findAll() {
    return 'This route is restricted to admins';
  }
}
```
В этом примере `RolesGuard` проверяет наличие у пользователя нужных ролей для доступа к маршруту.

</details>

### WebSockets и Реактивное программирование

<details>
<summary>54. Как реализовать WebSocket сервер в NestJS?</summary>
WebSocket сервер в NestJS реализуется с использованием модуля `@nestjs/websockets` и библиотеки `socket.io`.

#### Пример реализации WebSocket сервера:
```typescript
// chat.gateway.ts
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway],
})
export class AppModule {}
```
В этом примере создается WebSocket сервер, который принимает и ретранслирует сообщения.
</details>

<details>
<summary>55. Как обрабатывать события WebSocket?</summary>
Обработка событий WebSocket осуществляется с помощью декоратора `@SubscribeMessage` и методов в классе WebSocket Gateway.

#### Пример обработки событий WebSocket:
```typescript
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket): void {
    console.log(`Received message: ${message} from client: ${client.id}`);
    this.server.emit('message', message);
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() room: string, @ConnectedSocket() client: Socket): void {
    client.join(room);
    console.log(`Client: ${client.id} joined room: ${room}`);
  }
}
```
В этом примере обрабатываются события `message` и `join`, и выполняются соответствующие действия.
</details>

<details>
<summary>56. Что такое реактивное программирование?</summary>
Реактивное программирование - это парадигма программирования, направленная на создание асинхронных, событийных программ. Она использует потоки данных и операторов для обработки этих потоков.

#### Основные концепции реактивного программирования:
- **Обсерваблы (Observables)**: представляют собой потоки данных, которые можно подписывать и обрабатывать.
- **Подписчики (Subscribers)**: подписываются на обсерваблы для получения данных.
- **Операторы (Operators)**: функции для обработки, трансформации и фильтрации данных в обсерваблах.

Реактивное программирование позволяет более эффективно управлять асинхронными операциями и улучшает масштабируемость и производительность приложений.
</details>

<details>
<summary>57. Как использовать RxJS в NestJS?</summary>
RxJS - это библиотека для реактивного программирования с использованием обсерваблов. В NestJS RxJS используется для обработки асинхронных операций и управления потоками данных.

#### Пример использования RxJS в NestJS:
```typescript
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  getData(): Observable<string> {
    return of('Hello, World!').pipe(
      map(data => data.toUpperCase()),
    );
  }
}

// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(): Observable<string> {
    return this.dataService.getData();
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DataService } from './data.service';

@Module({
  controllers: [AppController],
  providers: [DataService],
})
export class AppModule {}
```
В этом примере `DataService` использует RxJS для обработки данных, а `AppController` возвращает обсервабл в качестве ответа на HTTP-запрос.
</details>

### GraphQL

<details>
<summary>58. Как интегрировать GraphQL в NestJS?</summary>
Для интеграции GraphQL в NestJS используется модуль `@nestjs/graphql`. Он предоставляет декораторы и инструменты для создания GraphQL API.

#### Пример интеграции GraphQL:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}

// app.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello, World!';
  }
}
```
В этом примере создается GraphQL API с одним запросом `sayHello`.
</details>

<details>
<summary>59. Какие библиотеки используются для работы с GraphQL?</summary>
Для работы с GraphQL в NestJS используются следующие библиотеки:
- `@nestjs/graphql`: интеграция GraphQL в NestJS.
- `graphql`: основной GraphQL пакет.
- `apollo-server-express`: сервер Apollo для Express.

Эти библиотеки обеспечивают создание схем, резолверов и обработку GraphQL запросов и мутаций.
</details>

<details>
<summary>60. Как создавать схемы и резолверы?</summary>
Схемы и резолверы создаются с использованием декораторов из модуля `@nestjs/graphql`. Схемы определяют структуру данных и операции, а резолверы содержат логику для обработки запросов и мутаций.

#### Пример создания схемы и резолвера:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}

// app.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello, World!';
  }

  @Mutation(() => Boolean)
  updateMessage(@Args('message') message: string): boolean {
    // Логика обновления сообщения
    return true;
  }
}
```
В этом примере создаются запрос `sayHello` и мутация `updateMessage`.
</details>

<details>
<summary>61. Как использовать GraphQL для запросов и мутаций?</summary>
GraphQL используется для выполнения запросов (queries) и мутаций (mutations) с помощью схем и резолверов, определенных в вашем приложении.

#### Пример запроса:
```graphql
query {
  sayHello
}
```
Ответ:
```json
{
  "data": {
    "sayHello": "Hello, World!"
  }
}
```

#### Пример мутации:
```graphql
mutation {
  updateMessage(message: "New message")
}
```
Ответ:
```json
{
  "data": {
    "updateMessage": true
  }
}
```
Запросы и мутации отправляются на сервер через HTTP и обрабатываются резолверами, которые возвращают результаты клиенту.
</details>

### Тестирование

<details>
<summary>62. Как тестировать NestJS приложения?</summary>
Тестирование NestJS приложений осуществляется с использованием фреймворка Jest, который интегрирован в NestJS по умолчанию. Тестирование включает юнит-тесты, интеграционные тесты и энд-то-энд (E2E) тесты.

#### Пример настройки тестовой среды:
```typescript
// jest-e2e.json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coverageDirectory": "../coverage",
  "testEnvironment": "node"
}
```

#### Запуск тестов:
```bash
npm run test
npm run test:watch
npm run test:cov
```
Эти команды выполняют тесты один раз, в режиме наблюдения и с покрытием кода соответственно.
</details>

<details>
<summary>63. Какие библиотеки используются для тестирования?</summary>
Основные библиотеки для тестирования в NestJS:
- **Jest**: фреймворк для тестирования, используемый по умолчанию.
- **Supertest**: для тестирования HTTP-запросов.
- **ts-mockito**: для создания моков и шпионов.

Эти библиотеки обеспечивают полноценное тестирование ваших приложений, включая юнит-тесты, интеграционные тесты и E2E тесты.
</details>

<details>
<summary>64. Как писать юнит-тесты для контроллеров и сервисов?</summary>
Юнит-тесты для контроллеров и сервисов в NestJS пишутся с использованием Jest и встроенных утилит для тестирования.

#### Пример юнит-теста для сервиса:
```typescript
// users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user = { id: 1, name: 'John' };
    expect(service.create(user)).toEqual(user);
  });
});
```

#### Пример юнит-теста для контроллера:
```typescript
// users.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all users', () => {
    const result = [{ id: 1, name: 'John' }];
    jest.spyOn(service, 'findAll').mockImplementation(() => result);
    expect(controller.findAll()).toBe(result);
  });
});
```
</details>

<details>
<summary>65. Как тестировать middleware и гварды?</summary>
Тестирование middleware и гвардов в NestJS осуществляется с использованием Jest и встроенных утилит для тестирования.

#### Пример тестирования middleware:
```typescript
// logger.middleware.spec.ts
import { LoggerMiddleware } from './logger.middleware';
import { Request, Response, NextFunction } from 'express';

describe('LoggerMiddleware', () => {
  let middleware: LoggerMiddleware;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    middleware = new LoggerMiddleware();
    req = {} as Request;
    res = {} as Response;
    next = jest.fn();
  });

  it('should call next function', () => {
    middleware.use(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
```

#### Пример тестирования гварда:
```typescript
// roles.guard.spec.ts
import { RolesGuard } from './roles.guard';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;
  let context: ExecutionContext;

  beforeEach(() => {
    reflector = new Reflector();
    guard = new RolesGuard(reflector);
    context = {
      switchToHttp: () => ({
        getRequest: () => ({
          user: { roles: ['admin'] },
        }),
      }),
    } as any;
  });

  it('should allow access for admin role', () => {
    jest.spyOn(reflector, 'get').mockReturnValue(['admin']);
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should deny access for non-admin role', () => {
    jest.spyOn(reflector, 'get').mockReturnValue(['user']);
    expect(guard.canActivate(context)).toBe(false);
  });
});
```
В этих примерах middleware и гвард тестируются на корректное выполнение своих функций.
</details>

### Конфигурация и Управление средой

<details>
<summary>66. Как управлять конфигурацией в NestJS?</summary>
Управление конфигурацией в NestJS осуществляется с использованием модуля `@nestjs/config`, который позволяет загружать конфигурации из различных источников, включая переменные окружения и файлы конфигурации.

#### Пример настройки конфигурации:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

#### Пример использования конфигурации:
```typescript
// config.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('PORT');
  }
}
```
</details>

<details>
<summary>67. Что такое ConfigService?</summary>
`ConfigService` - это сервис, предоставляемый модулем `@nestjs/config`, который позволяет получать доступ к значениям конфигурации в вашем приложении.

#### Пример использования `ConfigService`:
```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get databaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }
}
```
`ConfigService` предоставляет методы для получения значений конфигурации по ключу.
</details>

<details>
<summary>68. Как использовать переменные окружения?</summary>
Переменные окружения используются для хранения конфиденциальной информации и конфигурационных параметров, которые могут изменяться в зависимости от среды (разработка, тестирование, продакшн).

#### Пример использования переменных окружения:
1. Создайте файл `.env` в корне проекта:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
```

2. Настройте модуль конфигурации:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
})
export class AppModule {}
```

3. Используйте переменные окружения в вашем коде:
```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get databaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }
}
```
Переменные окружения теперь доступны через `ConfigService`.
</details>

<details>
<summary>69. Как настраивать и использовать конфигурационные модули?</summary>
Конфигурационные модули позволяют централизовать управление конфигурацией в приложении NestJS. Они могут быть настроены для загрузки конфигурации из различных источников.

#### Пример настройки конфигурационного модуля:
```typescript
// config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfigService } from './database-config.service';

@Module({
  imports: [ConfigModule],
  providers: [DatabaseConfigService],
  exports: [DatabaseConfigService],
})
export class DatabaseConfigModule {}

// database-config.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }



  get port(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }
}
```

#### Пример использования конфигурационного модуля:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { DatabaseConfigModule } from './config/database-config.module';

@Module({
  imports: [DatabaseConfigModule],
})
export class AppModule {}
```
Конфигурационные модули позволяют централизовать и упростить доступ к конфигурации в вашем приложении.
</details>

### Логи и Мониторинг

<details>
<summary>70. Как логировать события в NestJS?</summary>
Логирование в NestJS осуществляется с использованием встроенного сервиса `Logger`. Он предоставляет методы для различных уровней логирования: `log`, `error`, `warn`, `debug`, и `verbose`.

#### Пример использования Logger:
```typescript
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Hello world request received');
    return 'Hello, World!';
  }

  handleError(): void {
    try {
      // some logic
    } catch (error) {
      this.logger.error('Error occurred', error.stack);
    }
  }
}
```
В этом примере `Logger` используется для записи логов на различных уровнях.
</details>

<details>
<summary>71. Какие библиотеки можно использовать для логирования?</summary>
Для логирования в NestJS можно использовать различные библиотеки, такие как:
- **Winston**: мощная и настраиваемая библиотека для логирования.
- **Pino**: высокопроизводительная и быстрая библиотека для логирования.

#### Пример использования Winston с NestJS:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.prettyPrint(),
          ),
        }),
      ],
    }),
  ],
})
export class AppModule {}
```
</details>

<details>
<summary>72. Как настраивать и использовать мониторинг?</summary>
Мониторинг в NestJS может быть настроен с использованием таких инструментов, как Prometheus, Grafana или Datadog. Для интеграции с Prometheus можно использовать библиотеку `nestjs-prometheus`.

#### Пример настройки мониторинга с Prometheus:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/metrics',
      defaultMetrics: {
        enabled: true,
      },
    }),
  ],
})
export class AppModule {}
```
В этом примере метрики будут доступны по пути `/metrics`.
</details>

<details>
<summary>73. Как интегрировать NestJS с внешними системами мониторинга?</summary>
Интеграция с внешними системами мониторинга осуществляется с использованием клиентских библиотек или агентов, предоставляемых этими системами.

#### Пример интеграции с Datadog:
1. Установите Datadog агент:
```bash
npm install --save dd-trace
```

2. Настройте Datadog агент в вашем приложении:
```typescript
// main.ts
import 'dd-trace/init';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```
В этом примере Datadog агент будет инициализирован при запуске приложения.
</details>

### Производительность и Оптимизация

<details>
<summary>74. Как оптимизировать производительность NestJS приложений?</summary>
Оптимизация производительности NestJS приложений включает в себя:
- **Кэширование**: использование кэшей для уменьшения нагрузки на базу данных.
- **Компиляция Ahead-of-Time (AoT)**: уменьшение времени запуска приложения.
- **Мониторинг производительности**: использование инструментов мониторинга для обнаружения узких мест.
- **Оптимизация запросов к базе данных**: написание эффективных запросов и использование индексов.
- **Использование асинхронных операций**: применение асинхронного программирования для повышения масштабируемости.

#### Пример использования кэширования:
```typescript
// app.module.ts
import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
})
export class AppModule {}
```
</details>

<details>
<summary>75. Какие методы кэширования доступны в NestJS?</summary>
В NestJS доступны различные методы кэширования:
- **In-memory caching**: встроенный модуль кэширования `CacheModule`.
- **Redis**: использование Redis для распределенного кэширования.
- **Memcached**: использование Memcached для кэширования данных.

#### Пример использования Redis для кэширования:
```typescript
// app.module.ts
import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
})
export class AppModule {}
```
</details>

<details>
<summary>76. Как настроить и использовать кэширование?</summary>
Кэширование в NestJS настраивается с использованием модуля `CacheModule`, который поддерживает различные бекенды для кэширования.

#### Пример настройки кэширования:
```typescript
// app.module.ts
import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 100, // maximum number of items in cache
    }),
  ],
})
export class AppModule {}
```

#### Пример использования кэширования в сервисе:
```typescript
import { Injectable, Cacheable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Cacheable({ key: 'some-key', ttl: 10 })
  getData(): string {
    return 'Hello, World!';
  }
}
```
В этом примере метод `getData` будет кэшироваться на 10 секунд.
</details>

<details>
<summary>77. Как использовать компиляцию Ahead-of-Time (AoT)?</summary>
Компиляция Ahead-of-Time (AoT) в NestJS позволяет уменьшить время запуска приложения и повысить производительность за счет предварительной компиляции TypeScript кода.

#### Пример использования AoT:
1. Установите необходимые пакеты:
```bash
npm install --save-dev @nestjs/ng-universal @angular/platform-server @nguniversal/express-engine
```

2. Настройте AoT компиляцию:
```json
// nest-cli.json
{
  "compilerOptions": {
    "assets": [
      "**/*.hbs",
      "**/*.html",
      "**/*.css",
      "**/*.json",
      "**/*.txt"
    ],
    "deleteOutDir": true
  }
}
```

3. Запустите компиляцию:
```bash
npm run build
```
В этом примере приложение будет компилироваться заранее, что сократит время его запуска.
</details>

### Развертывание и CI/CD

<details>
<summary>78. Как развернуть NestJS приложение?</summary>
Развертывание NestJS приложения может осуществляться на различных платформах, таких как:
- **Heroku**: платформа как услуга (PaaS) для развертывания и управления приложениями.
- **AWS**: использование Amazon Web Services для развертывания и масштабирования приложений.
- **Docker**: контейнеризация приложения и его развертывание на различных платформах.

#### Пример развертывания на Heroku:
1. Установите Heroku CLI:
```bash
npm install -g heroku
```

2. Войдите в Heroku CLI:
```bash
heroku login
```

3. Создайте приложение на Heroku:
```bash
heroku create my-nestjs-app
```

4. Разверните приложение:
```bash
git push heroku main
```
</details>

<details>
<summary>79. Какие инструменты можно использовать для CI/CD?</summary>
Для CI/CD (непрерывной интеграции и непрерывной доставки) можно использовать различные инструменты:
- **GitHub Actions**: платформа для автоматизации рабочих процессов прямо из репозитория GitHub.
- **Jenkins**: сервер автоматизации с открытым исходным кодом для настройки CI/CD.
- **GitLab CI**: встроенная CI/CD платформа в GitLab.
- **CircleCI**: сервис для автоматизации тестирования и развертывания.

#### Пример настройки GitHub Actions для CI/CD:
1. Создайте файл `.github/workflows/ci.yml`:
```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
```
В этом примере настроен рабочий процесс для установки зависимостей, запуска тестов и сборки приложения.
</details>

<details>
<summary>80. Как настроить автоматическое развертывание?</summary>
Автомат

ическое развертывание может быть настроено с использованием инструментов CI/CD, таких как GitHub Actions, GitLab CI, Jenkins и других.

#### Пример настройки автоматического развертывания с GitHub Actions:
1. Создайте файл `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to Heroku
        env:
          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
        run: |
          git remote add heroku https://git.heroku.com/<your-heroku-app>.git
          git push heroku main
```
2. Создайте и добавьте секрет `HEROKU_API_KEY` в настройках репозитория GitHub.

В этом примере настроен рабочий процесс для автоматического развертывания приложения на Heroku при пуше в ветку `main`.

</details>

### Продвинутые темы

<details>
<summary>81. Как реализовать микросервисы в NestJS?</summary>
Микросервисы в NestJS реализуются с использованием модуля `@nestjs/microservices`, который позволяет создавать и управлять микросервисами на различных транспортных слоях.

#### Пример реализации микросервиса:
1. Создайте микросервис:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {}
```

2. Настройте микросервис:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { host: 'localhost', port: 3000 },
  });
  await app.listen();
}
bootstrap();
```

3. Создайте клиента микросервиса:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3000 },
    });
  }

  accumulate(data: number[]): Observable<number> {
    return this.client.send<number>('add', data);
  }
}
```
В этом примере создается микросервис, который работает на транспортном слое TCP.
</details>

<details>
<summary>82. Какие транспортные слои поддерживаются?</summary>
NestJS поддерживает несколько транспортных слоев для микросервисов:
- **TCP**: Transport Control Protocol.
- **Redis**: использует Redis Pub/Sub для коммуникации.
- **NATS**: использует NATS для передачи сообщений.
- **MQTT**: использует MQTT для передачи сообщений.
- **gRPC**: использует gRPC для коммуникации.
- **Kafka**: использует Apache Kafka для передачи сообщений.

Каждый транспортный слой имеет свои преимущества и используется в зависимости от требований системы.
</details>

<details>
<summary>83. Как использовать Redis в микросервисах?</summary>
Redis может быть использован в микросервисах NestJS для передачи сообщений через Pub/Sub.

#### Пример использования Redis:
1. Настройте микросервис с Redis:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {}
```

2. Настройте микросервис для приема сообщений:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await app.listen();
}
bootstrap();
```

3. Создайте клиента для отправки сообщений:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  sendMessage(pattern: string, data: any) {
    return this.client.send(pattern, data);
  }
}
```
В этом примере используется Redis для обмена сообщениями между микросервисами.
</details>

<details>
<summary>84. Как настроить gRPC сервер?</summary>
gRPC сервер в NestJS настраивается с использованием модуля `@nestjs/microservices` и gRPC транспортного слоя.

#### Пример настройки gRPC сервера:
1. Создайте gRPC сервер:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppService } from './app.service';

@Module({
  providers: [AppService],
})
export class AppModule {
  static getGrpcOptions(): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        package: 'app',
        protoPath: join(__dirname, '../src/app.proto'),
      },
    };
  }
}
```

2. Настройте gRPC сервер:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(AppModule.getGrpcOptions());
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
```

3. Определите gRPC методы и их обработчики:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @GrpcMethod('AppService', 'GetHello')
  getHello(data: any): { message: string } {
    return { message: 'Hello, ' + data.name };
  }
}
```

4. Создайте файл протокола gRPC (app.proto):
```proto
syntax = "proto3";

service AppService {
  rpc GetHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```
В этом примере создается gRPC сервер, который обрабатывает метод `GetHello`.
</details>

<details>
<summary>85. Что такое CQRS и как его использовать в NestJS?</summary>
CQRS (Command Query Responsibility Segregation) - это паттерн проектирования, который разделяет операции на чтение и запись, что позволяет лучше масштабировать и оптимизировать приложение.

#### Пример использования CQRS в NestJS:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/cqrs
```

2. Настройте CQRS модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, ...CommandHandlers, ...EventHandlers],
})
export class AppModule {}
```

3. Создайте команду и ее обработчик:
```typescript
// commands/impl/create-user.command.ts
import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand implements ICommand {
  constructor(public readonly name: string) {}
}

// commands/handlers/create-user.handler.ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  async execute(command: CreateUserCommand) {
    const { name } = command;
    // Логика создания пользователя
    console.log(`User created: ${name}`);
  }
}
```

4. Используйте команду в сервисе:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';

@Injectable()
export class AppService {
  constructor(private readonly commandBus: CommandBus) {}

  async createUser(name: string) {
    await this.commandBus.execute(new CreateUserCommand(name));
  }
}
```
В этом примере реализуется паттерн CQRS с использованием команд и их обработчиков.
</details>

<details>
<summary>86. Как реализовать Event Sourcing?</summary>
Event Sourcing - это паттерн, в котором состояние приложения хранится как последовательность событий. Это позволяет легко восстанавливать состояние и отслеживать изменения.

#### Пример реализации Event Sourcing в NestJS:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/cqrs
```

2. Настройте Event Sourcing модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EventHandlers }

 from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, ...EventHandlers],
})
export class AppModule {}
```

3. Создайте событие и его обработчик:
```typescript
// events/impl/user-created.event.ts
import { IEvent } from '@nestjs/cqrs';

export class UserCreatedEvent implements IEvent {
  constructor(public readonly name: string) {}
}

// events/handlers/user-created.handler.ts
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../impl/user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  handle(event: UserCreatedEvent) {
    const { name } = event;
    // Логика обработки события создания пользователя
    console.log(`User created event: ${name}`);
  }
}
```

4. Используйте событие в сервисе:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { UserCreatedEvent } from './events/impl/user-created.event';

@Injectable()
export class AppService {
  constructor(private readonly eventBus: EventBus) {}

  createUser(name: string) {
    this.eventBus.publish(new UserCreatedEvent(name));
  }
}
```
В этом примере реализуется Event Sourcing с использованием событий и их обработчиков.
</details>

<details>
<summary>87. Как использовать Web Workers в NestJS?</summary>
Web Workers в NestJS используются для выполнения фоновых задач и тяжелых вычислений. Для этого можно использовать библиотеку `worker_threads`.

#### Пример использования Web Workers:
1. Установите необходимые пакеты:
```bash
npm install worker_threads
```

2. Создайте worker:
```typescript
// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (data) => {
  const result = data * 2; // Пример тяжелого вычисления
  parentPort.postMessage(result);
});
```

3. Используйте worker в сервисе:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import { join } from 'path';

@Injectable()
export class AppService {
  executeHeavyTask(data: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, 'worker.js'));
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.postMessage(data);
    });
  }
}
```
В этом примере `worker_threads` используется для выполнения фоновых задач.
</details>

<details>
<summary>88. Что такое Scoped Providers?</summary>
Scoped Providers в NestJS - это провайдеры, которые имеют область видимости, отличную от глобальной. Они могут быть `Request-scoped` (областью запроса) или `Transient` (создаются заново при каждом использовании).

#### Пример Request-scoped провайдера:
```typescript
// app.module.ts
import { Module, Scope } from '@nestjs/common';
import { APP_SCOPE_OPTIONS } from '@nestjs/core';
import { AppService } from './app.service';

@Module({
  providers: [
    {
      provide: AppService,
      scope: Scope.REQUEST,
    },
  ],
})
export class AppModule {}
```

#### Пример Transient провайдера:
```typescript
// app.module.ts
import { Module, Scope } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  providers: [
    {
      provide: AppService,
      scope: Scope.TRANSIENT,
    },
  ],
})
export class AppModule {}
```
Scoped Providers позволяют контролировать время жизни объектов и их область видимости.
</details>

<details>
<summary>89. Как интегрировать NestJS с другими фреймворками?</summary>
Интеграция NestJS с другими фреймворками может быть осуществлена с использованием HTTP-запросов, микросервисов или через общие библиотеки.

#### Пример интеграции NestJS с Express:
1. Установите необходимые пакеты:
```bash
npm install express
```

2. Настройте приложение Express:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.listen(3000);
}
bootstrap();
```

#### Пример интеграции NestJS с микросервисами:
1. Настройте микросервис в NestJS:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'OTHER_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3001 } },
    ]),
  ],
})
export class AppModule {}
```

2. Вызов микросервиса:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({ transport: Transport.TCP, options: { host: 'localhost', port: 3001 } });
  }

  async callOtherService(data: any) {
    return this.client.send('some_pattern', data).toPromise();
  }
}
```
В этом примере NestJS интегрируется с Express и другими микросервисами для выполнения задач.

</details>

### Практические вопросы

<details>
<summary>90. Как создать CRUD приложение на NestJS?</summary>
Создание CRUD приложения на NestJS включает в себя создание сущностей, контроллеров, сервисов и репозиториев для управления данными.

#### Пример создания CRUD приложения:
1. Создайте сущность:
```typescript
// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

2. Создайте модуль:
```typescript
// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

3. Создайте сервис:
```typescript
// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
```

4. Создайте контроллер:
```typescript
// users.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
```

5. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
```
В этом примере создается CRUD приложение для управления пользователями.
</details>

<details>
<summary>91. Как интегрировать NestJS с фронтендом (например, Angular)?</summary>
Интеграция NestJS с фронтендом, таким как Angular, может быть выполнена с использованием REST API или GraphQL. Также можно использовать серверный рендеринг с помощью `@nestjs/ng-universal`.

#### Пример интеграции с Angular:
1. Настройте серверное приложение NestJS:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```

2. Настройте Angular приложение:
```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: '/api',
};
```

3. Создайте сервис для взаимодействия с API в Angular:
```typescript
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
```

4. Настройте прокси для разработки:
```json
// proxy.conf.json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

5. Обновите `angular.json` для использования прокси:
```json
// angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "serve": {
          "options": {
            "proxyConfig": "src/proxy.conf.json"
          }
        }
      }
    }
  }
}
```
В этом примере создается REST API на NestJS и Angular приложение, которое взаимодействует с этим API.
</details>

<details>
<summary>92. Как обработать загрузку файлов?</summary>
Загрузка файлов в NestJS осуществляется с использованием пакета `@nestjs/platform-express` и библиотеки `multer`.

#### Пример обработки загрузки файлов:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/platform-express multer
```

2. Настройте контроллер для загрузки файлов:
```typescript
// upload.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return { filename: file.filename };
  }
}
```

3. Настройте модуль:
```typescript
// upload.module.ts
import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';

@Module({
  controllers: [UploadController],
})
export class UploadModule {}
```

4. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UploadModule],
})
export class AppModule {}
```
В этом примере создается контроллер для загрузки файлов, который сохраняет файлы в директорию `./uploads`.
</details>

<details>
<summary>93. Как реализовать платежную систему?</summary>
Реализация платежной системы в NestJS включает интеграцию с платежным провайдером, таким как Stripe или PayPal.

#### Пример интеграции с Stripe:
1. Установите необходимые пакеты:
```bash
npm install stripe @nestjs/config
```

2. Настройте сервис для обработки платежей:
```typescript
// payment.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2020-08-27',
    });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
    });
  }
}
```

3. Настройте контроллер для обработки платежей:
```typescript
// payment.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-intent')
  async createPaymentIntent(@Body('amount') amount: number, @Body('currency') currency: string) {
    return this.paymentService.createPaymentIntent(amount, currency);
  }
}
```

4. Настройте модуль:
```typescript
// payment.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config

';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [ConfigModule],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
```

5. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [ConfigModule.forRoot(), PaymentModule],
})
export class AppModule {}
```
В этом примере реализуется интеграция с Stripe для создания платежных интентов.
</details>

<details>
<summary>94. Как работать с фоновыми задачами?</summary>
Фоновые задачи в NestJS могут быть реализованы с использованием библиотеки `bull` и модуля `@nestjs/bull` для работы с очередями задач.

#### Пример работы с фоновыми задачами:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/bull bull redis
```

2. Настройте модуль очереди:
```typescript
// queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueService } from './queue.service';
import { QueueProcessor } from './queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'taskQueue',
    }),
  ],
  providers: [QueueService, QueueProcessor],
})
export class QueueModule {}
```

3. Настройте сервис для добавления задач в очередь:
```typescript
// queue.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('taskQueue') private taskQueue: Queue) {}

  async addTask(data: any) {
    await this.taskQueue.add(data);
  }
}
```

4. Настройте процессор очереди для обработки задач:
```typescript
// queue.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('taskQueue')
export class QueueProcessor {
  @Process()
  async handleTask(job: Job) {
    console.log('Processing job:', job.data);
    // Логика обработки задачи
  }
}
```

5. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [QueueModule],
})
export class AppModule {}
```
В этом примере создается очередь задач и процессор для обработки этих задач.
</details>

<details>
<summary>95. Как реализовать многоязычность?</summary>
Многоязычность в NestJS можно реализовать с использованием библиотеки `nestjs-i18n`.

#### Пример реализации многоязычности:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/i18n i18next i18next-fs-backend
```

2. Настройте модуль многоязычности:
```typescript
// i18n.module.ts
import { Module } from '@nestjs/common';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    }),
  ],
})
export class I18nConfigModule {}
```

3. Настройте контроллер для использования многоязычности:
```typescript
// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly i18n: I18nService) {}

  @Get('hello')
  async sayHello(): Promise<string> {
    return this.i18n.translate('HELLO_MESSAGE');
  }
}
```

4. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { I18nConfigModule } from './i18n/i18n.module';
import { AppController } from './app.controller';

@Module({
  imports: [I18nConfigModule],
  controllers: [AppController],
})
export class AppModule {}
```

5. Создайте файлы переводов:
```json
// i18n/en.json
{
  "HELLO_MESSAGE": "Hello, World!"
}

// i18n/es.json
{
  "HELLO_MESSAGE": "¡Hola, Mundo!"
}
```
В этом примере создается многоязычная поддержка с использованием библиотеки `nestjs-i18n`.
</details>

<details>
<summary>96. Как работать с GraphQL subscriptions?</summary>
GraphQL subscriptions позволяют работать с реальными данными, используя WebSockets для получения уведомлений о событиях.

#### Пример работы с GraphQL subscriptions:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/graphql @nestjs/apollo apollo-server-express graphql-tools graphql
```

2. Настройте GraphQL модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PubSub } from 'graphql-subscriptions';
import { join } from 'path';

const pubSub = new PubSub();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: pubSub,
    },
  ],
})
export class AppModule {}
```

3. Создайте резолвер для subscriptions:
```typescript
// app.resolver.ts
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class AppResolver {
  constructor(private readonly pubSub: PubSub) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello, World!';
  }

  @Mutation(() => Boolean)
  async publishMessage(@Args('message') message: string): Promise<boolean> {
    await this.pubSub.publish('messageAdded', { messageAdded: message });
    return true;
  }

  @Subscription(() => String, {
    resolve: (value) => value,
  })
  messageAdded() {
    return this.pubSub.asyncIterator('messageAdded');
  }
}
```

4. Настройте главный модуль:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [
    AppResolver,
    {
      provide: 'PUB_SUB',
      useValue: pubSub,
    },
  ],
})
export class AppModule {}
```
В этом примере создается GraphQL сервер с поддержкой subscriptions для уведомлений о новых сообщениях.
</details>

<details>
<summary>97. Как защитить приложение от атак (например, CSRF, XSS)?</summary>
Защита приложения от атак включает использование различных методов и инструментов, таких как:
- **CSRF (Cross-Site Request Forgery)**: использование CSRF токенов для защиты форм и запросов.
- **XSS (Cross-Site Scripting)**: использование библиотек для очистки данных и шаблонов.

#### Пример защиты от CSRF:
1. Установите необходимые пакеты:
```bash
npm install csurf
```

2. Настройте middleware для защиты от CSRF:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(csurf());
  await app.listen(3000);
}
bootstrap();
```

#### Пример защиты от XSS:
1. Установите необходимые пакеты:
```bash
npm install xss-clean
```

2. Настройте middleware для защиты от XSS:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as xssClean from 'xss-clean';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(xssClean());
  await app.listen(3000);
}
bootstrap();
```
В этом примере используются middleware для защиты от CSRF и XSS атак.
</details>

<details>
<summary>98. Как настроить и использовать Swagger для документирования API?</summary>
Для настройки и использования Swagger в NestJS используется модуль `@nestjs/swagger`. Swagger позволяет генерировать интерактивную документацию для вашего API.

#### Пример настройки Swagger:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/swagger swagger-ui-express
```

2. Настройте Swagger в основном модуле:
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

3. Используйте декораторы для документирования контроллеров и DTO:
```typescript
// user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}

// users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  @ApiResponse({ status: 200, description: 'Return all users.' })
  findAll() {
    return [];
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new user.' })
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
```

В этом примере Swagger настроен для генерации документации по пути `/api`. Контроллеры и DTO аннотированы с помощью декораторов `@ApiTags`, `@ApiResponse` и `@ApiProperty`.
</details>

<details>
<summary>99. Как использовать и настраивать Guards для Role-based Access Control (RBAC)?</summary>
Guards в NestJS используются для контроля доступа на основе ролей. Вы можете создать кастомный Guard, который будет проверять роль пользователя перед выполнением запроса.

#### Пример настройки Guards для RBAC:
1. Создайте декоратор для ролей:
```typescript
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

2. Создайте Guard для проверки ролей:
```typescript
// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.some(role => user.roles?.includes(role));
  }
}
```

3. Используйте декоратор и Guard в контроллере:
```typescript
// users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  @Get()
  @Roles('admin')
  @ApiResponse({ status: 200, description: 'Return all users for admins.' })
  findAll() {
    return [];
  }
}
```

4. Настройте глобальное использование Guard:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
```

В этом примере создается Guard `RolesGuard`, который проверяет роли пользователя перед выполнением запроса, используя декоратор `@Roles` для определения необходимых ролей.
</details>

<details>
<summary>100. Как выполнять миграции базы данных?</summary>
Миграции базы данных в NestJS обычно выполняются с использованием ORM, такого как TypeORM. TypeORM предоставляет встроенные команды для создания и выполнения миграций.

#### Пример выполнения миграций с использованием TypeORM:
1. Настройте файл конфигурации TypeORM:
```typescript
// ormconfig.json
{
  "type": "sqlite",
  "database": "database.sqlite",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "migrations": ["dist/migration/**/*.js"],
  "cli": {
    "migrationsDir": "src/migration"
  }
}
```

2. Создайте миграцию:
```bash
npm run typeorm migration:generate -- -n CreateUsersTable
```

3. Пример миграции:
```typescript
// src/migration/1622830281293-CreateUsersTable.ts
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1622830281293 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
```

4. Выполните миграции:
```bash
npm run typeorm migration:run
```

5. Откат миграции (если необходимо):
```bash
npm run typeorm migration:revert
```

В этом примере показано, как настроить и выполнять миграции базы данных с использованием TypeORM в NestJS.
</details>

### Дополнительные вопросы

<details>
<summary>101. Для чего в NestJS используется RxJS, и что он делает?</summary>
RxJS (Reactive Extensions for JavaScript) используется в NestJS для обработки асинхронных операций и реактивного программирования. RxJS предоставляет мощные операторы для создания и управления потоками данных (Observables), что позволяет легко работать с асинхронными операциями, такими как HTTP-запросы, таймеры и события.

#### Пример использования RxJS:
```typescript
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  getData(): Observable<string> {
    return of('Hello, World!').pipe(
      map(data => data.toUpperCase()),
    );
  }
}
```
В этом примере `RxJS` используется для преобразования данных в потоке.
</details>

<details>
<summary>102. В чем разница между интерсепторами и middleware в NestJS?</summary>
Интерсепторы и middleware в NestJS выполняют разные роли:

- **Middleware**:
  - Обрабатывают запросы до того, как они достигнут контроллера.
  - Обычно используются для обработки, таких как аутентификация, логирование, CORS и т.д.
  - Применяются ко всем маршрутам или группам маршрутов.
  - Пример:
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
    ```

- **Интерсепторы**:
  - Обрабатывают запросы после того, как они достигли контроллера, но до отправки ответа клиенту.
  - Могут изменять запросы и ответы.
  - Используются для кэширования, логирования, трансформации данных и т.д.
  - Пример:
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
</details>

<details>
<summary>103. Как управлять параллельными запросами с использованием RxJS?</summary>
RxJS предоставляет операторы для управления параллельными запросами, такие как `forkJoin`, `combineLatest`, `merge`, и `concat`.

#### Пример использования `forkJoin` для параллельных запросов:
```typescript
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private httpService: HttpService) {}

  getMultipleData(): Observable<any[]> {
    const requestOne = this.httpService.get('https://api.example.com/data1').pipe(map(res => res.data));
    const requestTwo = this.httpService.get('https://api.example.com/data2').pipe(map(res => res.data));

    return forkJoin([requestOne, requestTwo]);
  }
}
```
В этом примере `forkJoin` используется для выполнения двух HTTP-запросов параллельно и ожидания их завершения.
</details>

<details>
<summary>104. Что такое "hot" и "cold" observables в контексте RxJS и как их использовать в NestJS?</summary>
- **Cold Observables**: создают новый поток данных для каждого подписчика. Пример: HTTP-запросы.
  - Пример:
    ```typescript
    import { Observable, of } from 'rxjs';

    const coldObservable = of('Hello, World!');
    ```

- **Hot Observables**: разделяют один поток данных между всеми подписчиками. Пример: события, WebSocket соединения.
  - Пример:
    ```typescript
    import { Subject } from 'rxjs';

    const hotObservable = new Subject();
    hotObservable.next('Hello, World!');
    ```

#### Использование в NestJS:
Cold Observables часто используются для выполнения HTTP-запросов и асинхронных операций, в то время как Hot Observables полезны для работы с событиями и WebSocket соединениями.

```typescript
import { Injectable } from '@nestjs/common';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class DataService {
  private hotObservable = new Subject<string>();

  getColdObservable(): Observable<string> {
    return of('Hello, World!');
  }

  getHotObservable(): Observable<string> {
    this.hotObservable.next('Hello, from hot observable');
    return this.hotObservable.asObservable();
  }
}
```
</details>

<details>
<summary>105. Как использовать операторы RxJS для обработки данных?</summary>
Операторы RxJS используются для преобразования, фильтрации и комбинирования потоков данных.

#### Пример использования операторов:
```typescript
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  getData(): Observable<string> {
    return of('Hello, World!').pipe(
      map(data => data.toUpperCase()),
      filter(data => data.includes('HELLO')),
      catchError(err => {
        console.error(err);
        return of('Error occurred');
      })
    );
  }
}
```
В этом примере используются операторы `map`, `filter`, и `catchError` для преобразования и обработки данных в Observable.
</details>

<details>
<summary>106. Что такое "error handling" в RxJS и как это применимо в NestJS?</summary>
Error handling в RxJS осуществляется с использованием операторов `catchError` и `retry`.

#### Пример обработки ошибок в RxJS:
```typescript
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  getData(): Observable<string> {
    return of('Hello, World!').pipe(
      catchError(err => {
        console.error('Error occurred:', err);
        return of('Error occurred');
      })
    );
  }
}
```

#### Применение в NestJS:
Error handling полезен для управления ошибками в асинхронных операциях, таких как HTTP-запросы, и обеспечения надежности приложения.

```typescript
import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private httpService: HttpService) {}

  fetchData(): Observable<any> {
    return this.httpService.get('https://api.example.com/data').pipe(
      catchError(err => {
        throw new HttpException('Failed to fetch data', 500);
      })
    );
  }
}
```
</details>

<details>
<summary>107. Как интегрировать NestJS с другими асинхронными библиотеками, используя RxJS?</summary>
RxJS может быть использован для интеграции с другими асинхронными библиотеками, конвертируя их в Observables.

#### Пример интеграции с асинхронной библиотекой:
```typescript
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';

@Injectable()
export class DataService {
  private asyncLibraryMethod(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Data from async library'), 1000));
  }

  getData(): Observable<string> {
    return from(this.asyncLibraryMethod());
  }
}
```
В этом примере метод `asyncLibraryMethod` конвертируется в Observable с использованием `from`.
</details>

<details>
<summary>108. Как использовать декораторы @UseInterceptors и @UseGuards в контроллерах?</summary>
Декораторы `@UseInterceptors` и `@UseGuards` используются для применения интерсепторов и гвардов к методам контроллеров.

#### Пример использования @UseInterceptors:
```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

@Controller('data')
@UseInterceptors(TransformInterceptor)
export class DataController {
  @Get()
  getData() {
    return { message: 'Hello, World!' };
  }
}
```

#### Пример использования @UseGuards:
```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('secure-data')
@UseGuards(AuthGuard)
export class SecureDataController {
  @Get()
  getSecureData() {
    return { message: 'Secure Data' };
  }
}
```
В этих примерах интерсепторы и гварды применяются к методам контроллеров с помощью соответствующих декораторов.
</details>

<details>
<summary>109. Как реализовать кэширование ответов с помощью интерсепторов?</summary>
Интерсепторы

 в NestJS могут быть использованы для кэширования ответов. Например, можно использовать библиотеку `cache-manager`.

#### Пример реализации кэширования ответов:
1. Установите необходимые пакеты:
```bash
npm install cache-manager
```

2. Создайте интерсептор для кэширования:
```typescript
// cache.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as cacheManager from 'cache-manager';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  private cache = cacheManager.caching({ store: 'memory', max: 100, ttl: 10 });

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const key = context.switchToHttp().getRequest().url;
    const cachedResponse = await this.cache.get(key);

    if (cachedResponse) {
      return cachedResponse;
    }

    return next.handle().pipe(
      tap(response => {
        this.cache.set(key, response);
      }),
    );
  }
}
```

3. Примените интерсептор в контроллере:
```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from './cache.interceptor';

@Controller('data')
@UseInterceptors(CacheInterceptor)
export class DataController {
  @Get()
  getData() {
    return { message: 'Hello, World!' };
  }
}
```
В этом примере интерсептор `CacheInterceptor` кэширует ответы для запросов.
</details>

<details>
<summary>110. В чем преимущество использования Pipes для валидации данных перед использованием middleware?</summary>
Преимущества использования Pipes для валидации данных перед middleware:
- **Простота использования**: Pipes легко подключаются к конкретным маршрутам или параметрам, что делает их использование более интуитивным.
- **Гранулярность**: Pipes можно применять к отдельным параметрам запроса, а middleware обычно применяется ко всем параметрам.
- **Фокусировка**: Pipes специально предназначены для преобразования и валидации данных, в то время как middleware имеет более широкое применение.
- **Легкость тестирования**: Pipes легко тестируются, так как они фокусируются на одной задаче.
- **Интеграция с декораторами**: Pipes интегрируются с декораторами, такими как `@Body()`, `@Param()`, что делает их более гибкими и мощными.

#### Пример использования Pipes для валидации:
```typescript
// create-user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

// users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ValidationPipe } from './validation.pipe';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
```
В этом примере `ValidationPipe` используется для валидации данных запроса, что делает процесс более простым и эффективным.
</details>


<details>
<summary>111. Как реализовать трансформацию данных в респонсах с помощью интерсепторов?</summary>
Трансформация данных в респонсах с помощью интерсепторов осуществляется путем перехвата ответа и его изменения перед отправкой клиенту.

#### Пример трансформации данных:
```typescript
// transform.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({ data, timestamp: new Date().toISOString() })),
    );
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './transform.interceptor';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
```
В этом примере интерсептор `TransformInterceptor` добавляет временную метку к каждому ответу.
</details>

<details>
<summary>112. Как обрабатывать глобальные ошибки с помощью фильтров?</summary>
Глобальные ошибки обрабатываются с помощью фильтров исключений (Exception Filters), которые перехватывают и обрабатывают ошибки до того, как они будут отправлены клиенту.

#### Пример обработки глобальных ошибок:
```typescript
// all-exceptions.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception instanceof HttpException ? exception.message : 'Internal server error',
    });
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
```
В этом примере фильтр `AllExceptionsFilter` перехватывает все исключения и возвращает структурированный ответ с информацией об ошибке.
</details>

<details>
<summary>113. В чем отличие @Catch от @UseFilters?</summary>
- **@Catch**: декоратор используется для создания фильтров исключений. Он определяет, какие типы исключений должен обрабатывать фильтр.
  - Пример:
    ```typescript
    import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

    @Catch(HttpException)
    export class HttpExceptionFilter implements ExceptionFilter {
      catch(exception: HttpException, host: ArgumentsHost) {
        // Обработка исключения
      }
    }
    ```

- **@UseFilters**: декоратор применяется к методам контроллеров или к самим контроллерам для указания фильтров исключений, которые должны применяться.
  - Пример:
    ```typescript
    import { Controller, Get, UseFilters } from '@nestjs/common';
    import { HttpExceptionFilter } from './http-exception.filter';

    @Controller('users')
    @UseFilters(HttpExceptionFilter)
    export class UsersController {
      @Get()
      findAll() {
        throw new HttpException('Forbidden', 403);
      }
    }
    ```

В этом примере `@Catch` используется для создания фильтра, а `@UseFilters` для его применения.
</details>

<details>
<summary>114. Как создать кастомные декораторы и для чего они могут использоваться?</summary>
Кастомные декораторы в NestJS используются для добавления метаданных к классам, методам или параметрам. Они могут использоваться для создания собственных аннотаций и улучшения читаемости и повторного использования кода.

#### Пример создания кастомного декоратора:
```typescript
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return roles.some(role => user.roles?.includes(role));
  }
}

// users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  @Get()
  @Roles('admin')
  findAll() {
    return 'This action is restricted to admin users';
  }
}
```
В этом примере декоратор `@Roles` добавляет метаданные ролей к методу контроллера, а `RolesGuard` использует эти метаданные для проверки доступа.
</details>

<details>
<summary>115. Как работать с параметрами запросов и телом запроса в контроллерах?</summary>
В NestJS параметры запросов и тело запроса обрабатываются с помощью декораторов, таких как `@Param()`, `@Query()`, `@Body()`, и `@Headers()`.

#### Пример работы с параметрами запросов и телом запроса:
```typescript
import { Controller, Get, Post, Body, Param, Query, Headers } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get(':id')
  findOne(@Param('id') id: string, @Query('details') details: string, @Headers('Authorization') authHeader: string) {
    return {
      id,
      details,
      authHeader,
    };
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return createItemDto;
  }
}

// create-item.dto.ts
export class CreateItemDto {
  name: string;
  description: string;
}
```
В этом примере контроллер `ItemsController` обрабатывает параметры маршрута, запросы и заголовки.
</details>

<details>
<summary>116. Как настроить и использовать HTTP модули для внешних API запросов?</summary>
NestJS предоставляет `HttpModule` для выполнения HTTP-запросов к внешним API.

#### Пример настройки и использования HTTP модуля:
1. Установите необходимые пакеты:
```bash
npm install @nestjs/axios
```

2. Настройте `HttpModule`:
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  providers: [AppService],
})
export class AppModule {}
```

3. Используйте `HttpService` для выполнения запросов:
```typescript
// app.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getExternalData() {
    return this.httpService.get('https://api.example.com/data').pipe(
      map(response => response.data),
    );
  }
}
```
В этом примере `HttpService` используется для выполнения GET-запроса к внешнему API.
</details>

<details>
<summary>117. Как использовать NestJS CLI для генерации кода?</summary>
NestJS CLI упрощает создание новых модулей, контроллеров, сервисов и других компонентов. Он позволяет быстро генерировать шаблонный код, что ускоряет разработку.

#### Пример использования NestJS CLI:
1. Установите NestJS CLI:
```bash
npm install -g @nestjs/cli
```

2. Создайте новый проект:
```bash
nest new project-name
```

3. Сгенерируйте новый модуль:
```bash
nest generate module users
```

4. Сгенерируйте новый контроллер:
```bash
nest generate controller users
```

5. Сгенерируйте новый сервис:
```bash
nest generate service users
```

CLI автоматически создаст файлы и добавит их в нужные модули.
</details>

<details>
<summary>118. Как разрабатывать и тестировать NestJS приложения в монорепозитории?</summary>
Монорепозиторий позволяет управлять несколькими проектами в одном репозитории, что облегчает совместное использование кода и зависимостей.

#### Пример настройки монорепозитория с использованием Nx:
1. Установите Nx CLI:
```bash


npm install -g nx
```

2. Создайте новый монорепозиторий:
```bash
npx create-nx-workspace@latest
```

3. Добавьте NestJS проект в монорепозиторий:
```bash
nx generate @nrwl/nest:application my-app
```

4. Запустите проект:
```bash
nx serve my-app
```

5. Напишите и запустите тесты:
```bash
nx test my-app
```

Nx предоставляет мощные инструменты для управления зависимостями и сборки в монорепозитории.
</details>

<details>
<summary>119. Как реализовать международное разграничение доступа (multi-tenancy)?</summary>
Международное разграничение доступа (multi-tenancy) в NestJS может быть реализовано с использованием middleware или модулей для управления контекстом арендатора (tenant).

#### Пример реализации multi-tenancy:
1. Создайте middleware для идентификации арендатора:
```typescript
// tenant.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id'];
    if (!tenantId) {
      return res.status(400).send('Tenant ID is missing');
    }
    req['tenantId'] = tenantId;
    next();
  }
}

// app.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TenantMiddleware } from './tenant.middleware';

@Module({
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
```

2. Используйте контекст арендатора в сервисах:
```typescript
import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TenantService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getTenantId(): string {
    return this.request['tenantId'];
  }
}
```
В этом примере middleware `TenantMiddleware` извлекает идентификатор арендатора из заголовков запроса и добавляет его в объект запроса.
</details>

<details>
<summary>120. Как интегрировать NestJS с сервисами, работающими на других языках программирования?</summary>
Интеграция NestJS с сервисами, работающими на других языках программирования, может быть выполнена через различные протоколы и форматы обмена данными, такие как HTTP, gRPC, Redis, Kafka и другие.

#### Пример интеграции через HTTP:
1. Создайте HTTP клиент в NestJS:
```typescript
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class ExternalService {
  constructor(private httpService: HttpService) {}

  getExternalData() {
    return this.httpService.get('http://other-service/api/data').pipe(
      map(response => response.data),
    );
  }
}
```

#### Пример интеграции через gRPC:
1. Настройте gRPC клиент в NestJS:
```typescript
// grpc-client.options.ts
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, './app.proto'),
  },
};

// app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([{ name: 'APP_PACKAGE', ...grpcClientOptions }])],
  providers: [AppService],
})
export class AppModule {}

// app.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface AppServiceClient {
  getData(data: any): Observable<any>;
}

@Injectable()
export class AppService {
  private appServiceClient: AppServiceClient;

  constructor(@Inject('APP_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.appServiceClient = this.client.getService<AppServiceClient>('AppService');
  }

  getExternalData(): Observable<any> {
    return this.appServiceClient.getData({});
  }
}
```

#### Пример интеграции через Redis:
1. Настройте Redis клиент в NestJS:
```typescript
import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class AppService {
  constructor(private redisService: RedisService) {}

  async getRedisData(key: string): Promise<string> {
    const client = this.redisService.getClient();
    return client.get(key);
  }
}
```
В этих примерах показаны различные способы интеграции NestJS с сервисами, работающими на других языках программирования, через HTTP, gRPC и Redis.