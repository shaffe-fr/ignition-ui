export type IgnitionConfig = {
    editor: string;
    editorOptions: { [editor: string]: { label: string; url: string } };
    remoteSitesPath: string;
    localSitesPath: string;
    theme: 'light' | 'dark' | 'auto';
    enableShareButton: boolean;
    directorySeparator: string;
};

export type ErrorFrame = {
    class?: string;
    method: string;
    code_snippet: Record<string | number, string>;
    file: string;
    relative_file: string;
    line_number: number;
    application_frame: boolean;
};

export type ErrorOccurrence = {
    id: number;
    error_id: number;
    occurrence_number: number;
    received_at: string;
    seen_at_url: string;
    exception_message: string;
    exception_class: string;
    application_path: string;
    application_version?: string;
    notifier_client_name: string;
    language_version?: string;
    framework_version?: string;
    open_frame_index?: number;
    stage: string;
    context_items: Record<string, Array<ContextItem>>;
    group_identifier: string;
    group_count: number;
    group_detail_query: string;
    first_frame_class: string;
    first_frame_method: string;
    group_first_seen_at?: string;
    group_last_seen_at?: string;
    glows: Array<ErrorGlow>;
    solutions: Array<ErrorSolution>;
    frames: Array<ErrorFrame>;
    links: {
        show: string;
        share: string;
        group_details?: string;
    };
};
export type ContextItem = {
    group: string;
    name: string;
    value: any;
};

export type ErrorGlow = {
    id: number;
    received_at: string;

    message_level: LogLevel;
    meta_data: Record<string, string | object>;
    microtime: number;
    name: string;
    time: number;
};

export type ErrorSolution = {
    id: number;
    class: string;
    title: string;
    description: string;
    links: { [label: string]: string };
    is_runnable: boolean;
    action_description?: string;
    run_button_text?: string;
    execute_endpoint?: string;
    run_parameters?: string;
};

export type FrameType = 'application' | 'vendor' | 'unknown';

export type StackFrameGroupType = {
    type: FrameType;
    relative_file: string;
    expanded: boolean;
    frames: Array<ErrorFrame & { frame_number: number; selected: boolean }>;
};

export type Tabname = 'stackTraceTab' | 'requestTab' | 'appTab' | 'userTab' | 'contextTab' | 'debugTab';

export type SharePostData = {
    tabs?: Array<Tabname>;
    selectedTabNames: Array<Tabname>;
    lineSelection: string;
};

export type QueryDebug = {
    bindings: Array<{
        type: 'string' | 'int' | 'float' | 'bool' | 'null';
        value: string;
    }>;
    microtime: number;
    replace_bindings: boolean;
    sql: string;
    time: number;
    connection_name: string;
};

export type DumpDebug = {
    html_dump: string;
    file: string;
    line_number: number;
    microtime: number;
};

export type LogLevel = 'debug' | 'info' | 'notice' | 'warning' | 'error' | 'critical' | 'alert' | 'emergency' | 'warn';

export type LogDebug = {
    context: Record<string, string | object>;
    level: LogLevel;
    message: string;
    microtime: number;
};
