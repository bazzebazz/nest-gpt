import OpenAI from "openai";

interface Options {
    threadId: string;
    assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
    const {threadId, assistantId = 'asst_jS9bjsq4ei3WltFXHuypB17g'} = options;
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
        //Si se configuran otras instrucciones desde aca, sobreescribe las instrucciones del panel de OpenAi
    });

    console.log({run});

    return run;
}