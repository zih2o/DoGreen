type ImageT = {
    link: string
    fileName: string;
}

interface FileResponseDto {
    _id: Schema.Types.ObjectId;
    link: string;
}

type ParamsT = {
    Bucket: string;
    Key: string;
    Body: Buffer;
}
