import $ from 'miaoxing';
import { req, url } from '@mxjs/app';

$.req = req.get.bind(req);
$.url = url.to.bind(url);

/**
 * @experimental
 */
$.fullUrl = url.full.bind(url);
$.apiUrl = url.api.bind(url);