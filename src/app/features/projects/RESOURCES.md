## Context

Reference modules to follow existing patterns

## Task

Build the `resources` components for projects

## Model: `Resource`

Fields:

```ts
title: string
description: string (type: 'text')
file: string (stored filename/path — uploaded file)
category: ResourceCategory (enum)
tags: string[] (simple-array column, nullable)
project: Project (ManyToOne, nullable, onDelete: SET NULL)
phase: Phase (ManyToOne, nullable, onDelete: SET NULL)
```

Category enum:

```ts
export enum ResourceCategory {
  GUIDE = 'guide',
  TEMPLATE = 'template',
  LEGAL = 'legal',
  PITCH = 'pitch',
  FINANCIAL = 'financial',
  REPORT = 'report',
  OTHER = 'other'
}
```

### Routes

```
POST   /resources                      — Create resource (with file upload, field name: 'file')
                                          Body accepts optional project_id OR phase_id (not both)
PATCH  /resources/:id                  — Update metadata (title, description, category, tags)
PATCH /ressources/file/:id             — Replace the old file from the disk and update the name in the database
PATCH  /resources/:id/publish          — Toggle is_published
DELETE /resources/:id                  — Soft delete
```

---

## File Upload

- Field name: `file`
- Accepted types: PDF, DOCX, XLSX, PPTX, ZIP

## DTOs

- `CreateResourceDto` — title, description, category (ResourceCategory), tags (optional string[]), project_id (optional UUID), phase_id (optional UUID)
- `UpdateResourceDto` — PartialType(CreateResourceDto), exclude project_id/phase_id (scope is set at creation)
- `FilterResourcesDto` — page, category (optional ResourceCategory), tags (optional string)
