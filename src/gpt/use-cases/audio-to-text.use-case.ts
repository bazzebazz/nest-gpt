import * as fs from 'fs';
import OpenAI from "openai";

interface Options {
    prompt?: string;
    audioFile: Express.Multer.File;
}

export const audioToTextUseCase = async (openai: OpenAI, options: Options) => {
    const {prompt, audioFile} = options;

    const res = await openai.audio.transcriptions.create({
        model: 'whisper-1',
        file: fs.createReadStream(audioFile.path),
        prompt: prompt, //Mismo idioma
        language: 'es',
        response_format: 'verbose_json',
        // response_format: 'srt',//'vtt',
    });

    return res;

}