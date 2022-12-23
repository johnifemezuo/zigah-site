{{/*
Expand the name of the chart.
*/}}
{{- define "zigah-website.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "zigah-website.fullname" -}}
{{- if .Values.fullNameOverride }}
{{- .Values.fullNameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "zigah-website.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "zigah-website.labels" -}}
{{ include "zigah-website.selectorLabels" . }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "zigah-website.selectorLabels" -}}
app: {{ include "zigah-website.name" . }}
{{ toYaml .Values.app.labels }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "zigah-website.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "zigah-website.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create the ConfigMap data base on the app environment
*/}}
{{- define "zigah-website.configData" }}
{{ $PATH := (printf "environments/%v/config-map.yaml" .Values.app.env) }}
{{ .Files.Get $PATH }}
{{- end }}
