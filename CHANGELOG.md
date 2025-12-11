# Changelog

Все значимые изменения в Farog будут документироваться в этом файле.

## [1.0.0] — Первый стабильный релиз

### Добавлено
- Ядро рантайма Farog на C++ с поддержкой JavaScript и TypeScript.
- Собственный формат конфигурации `farog.toml`.
- Стандартная библиотека:
  - `farog/http` — минималистичный HTTP-интерфейс.
  - `farog/fs` — безопасные операции с файловой системой.
  - `farog/permissions` — управление разрешениями.
- CLI `farog` (Go):
  - `farog init`
  - `farog run`
  - `farog dev`
  - `farog build`
  - `farog test`
  - `farog pm install/add/audit`
  - `farog import-node`
  - `farog shell`
- Примеры `examples/starter-http` и `examples/serverless-handler`.
- Базовая документация (`docs/`) и сайт (`website/`).
- Настроены GitHub Actions для CI, релизов и проверки безопасности.
